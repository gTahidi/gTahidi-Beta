"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getServerSession } from "next-auth/next";
import {
  ClientSafeProvider,
  getCsrfToken,
  getProviders,
  getSession,
  LiteralUnion,
  signIn,
  useSession,
} from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { BuiltInProviderType } from "next-auth/providers";
import { AuthProviderImage } from "@/components/AuthProviderImage";
import { useGlobalData } from "@/hooks/useGlobalData";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleNotch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const SignIn = ({ context }: { context: "sign-in" | "sign-up" }) => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const params = useSearchParams();

  const { data: session, status } = useSession();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    const error = params.get("error");
    if (error) {
      toast.error(`an error occurred 😕`);
    }
  }, [params]);

  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    if (status === "authenticated") {
      toast.success("you are signed in");
    }
  }, [status]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef?.current!);

    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
      csrfToken: formData.get("csrfToken"),
    };

    signIn("credentials", {
      ...userData,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <main className="bg-gtahidiCream h-screen w-screen flex flex-col">
      <Image
        src="/logo.png"
        alt="logo"
        width={600}
        height={600}
        className="w-[100px] aspect-square object-cover mx-auto my-5"
      />
      <form
        className="mx-auto flex flex-col items-center w-2/3 sm:w-1/3"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <p className="text-2xl font-semibold my-5">Welcome educator 👋</p>
        {context === "sign-up" && (
          <p className="text-xs">
            Lets create your account. You only need to do this once
          </p>
        )}
        <input
          type="email"
          className="w-full text-sm p-3 focus:outline-gtahidiPurple focus:outline mb-2"
          placeholder="Email address"
          ref={emailRef}
          required
          name="email"
        />
        <input
          type="password"
          className="w-full text-sm p-3 focus:outline-gtahidiPurple focus:outline"
          placeholder="password"
          required
          name="password"
        />
        <button
          className="bg-gtahidiPurple p-3 rounded text-white font-medium w-full mt-2 text-center cursor-pointer"
          onClick={() => {
            if (!isValidEmail(emailRef.current?.value ?? null)) {
              toast.warn("Please enter a valid email");
            }
          }}
          type="submit"
        >
          {isLoading ? (
            <FontAwesomeIcon
              icon={faCircleNotch}
              className="w-5 h-5 mx-auto"
              spin
            />
          ) : (
            "Continue"
          )}
        </button>
      </form>
      <div className="mx-auto flex flex-col items-center mt-5 w-2/3 sm:w-1/3">
        {context === "sign-up" ? (
          <p className="text-sm mt-5">
            Already have an account?{" "}
            <Link
              className="text-green-500 cursor-pointer"
              href={"/auth/signin"}
            >
              Sign in
            </Link>
          </p>
        ) : (
          <p className="text-sm mt-5">
            Don`t have an account?{" "}
            <Link
              className="text-green-500 cursor-pointer"
              href={"/auth/signup"}
            >
              Sign up
            </Link>
          </p>
        )}
        <p className="text-sm text-green-500">Forgot password ?</p>
        <div className="text-center flex items-center w-full mt-5">
          <div className="w-full bg-gray-500 h-[1px]" />
          <p className="mx-2 text-sm">OR</p>
          <div className="w-full bg-gray-500 h-[1px]" />
        </div>
        {providers &&
          Object.values(providers).map((provider) => {
            if (provider.id !== "credentials") {
              return (
                <button
                  className="p-3 rounded bg-white w-full text-sm mb-2 flex items-center justify-center"
                  key={provider.id}
                  onClick={() =>
                    signIn(provider.id, {
                      redirect: true,
                      callbackUrl: "/dashboard",
                    })
                  }
                >
                  <p className="mr-2">
                    {context === "sign-up" ? "Sign up with" : "Continue with"}{" "}
                    {provider.name}
                  </p>
                  <AuthProviderImage providerId={provider.id} />
                </button>
              );
            }
          })}
      </div>
    </main>
  );
};

export default SignIn;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    return { redirect: { destination: "/dashboard" } };
  }

  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  return {
    props: { providers: providers ?? [], csrfToken },
  };
}

function isValidEmail(email: string | null) {
  if (!email) {
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
