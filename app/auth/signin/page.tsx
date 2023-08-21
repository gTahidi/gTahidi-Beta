"use client";

import React, { useEffect, useState } from "react";
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
} from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { BuiltInProviderType } from "next-auth/providers";
import { AuthProviderImage } from "@/components/AuthProviderImage";

const SignIn = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <main className="bg-gtahidiCream h-screen w-screen flex flex-col">
      <Image
        src="/logo.png"
        alt="logo"
        width={600}
        height={600}
        className="w-[150px] h-[150px] object-cover mx-auto"
      />
      <form
        className="mx-auto flex flex-col items-center mt-5 w-2/3 sm:w-1/3"
        method="post"
        action="/api/auth/callback/credentials"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <p className="text-2xl font-semibold my-5">Welcome educator 👋</p>
        <input
          type="email"
          className="w-full text-sm p-3 focus:outline-gtahidiPurple focus:outline"
          placeholder="Email address"
        />
        <button
          type="submit"
          className="bg-gtahidiPurple p-3 rounded text-white font-medium w-full mt-2"
        >
          Continue
        </button>
      </form>
      <div className="mx-auto flex flex-col items-center mt-5 w-2/3 sm:w-1/3">
        <p className="text-sm mt-5">
          Don`t have an account? <span className="text-green-500">Sign up</span>
        </p>
        <p className="text-sm text-green-500">Forgot password ?</p>
        <div className="text-center flex items-center w-full mt-5">
          <div className="w-full bg-gray-500 h-[1px]" />
          <p className="mx-2 text-sm">OR</p>
          <div className="w-full bg-gray-500 h-[1px]" />
        </div>
        {providers &&
          Object.values(providers).map((provider) => (
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
              <p className="mr-2">Continue with</p>
              <AuthProviderImage providerId={provider.id} />
            </button>
          ))}
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
