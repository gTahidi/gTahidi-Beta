import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    // <main className="bg-gtahidiCream h-screen w-screen flex flex-col">
    //   <form className="mx-auto flex flex-col items-center mt-5 w-2/3 sm:w-1/3">
    //     <Image
    //       src="/logo.png"
    //       alt="logo"
    //       width={600}
    //       height={600}
    //       className="w-[200px] h-[200px] object-cover mx-auto"
    //     />
    //     <p className="text-2xl font-semibold my-5">Welcome educator 👋</p>
    //     <input
    //       type="email"
    //       className="w-full text-sm p-3 focus:outline-gtahidiPurple focus:outline"
    //       placeholder="Email address"
    //       required
    //     />
    //     <button
    //       type="submit"
    //       className="bg-gtahidiPurple p-3 rounded text-white font-medium w-full mt-2"
    //     >
    //       Continue
    //     </button>
    //     <p className="text-sm mt-5">
    //       Don`t have an account? <span className="text-green-500">Sign up</span>
    //     </p>
    //     <p className="text-sm text-green-500">Forgot password ?</p>
    //     <div className="text-center flex items-center w-full mt-5">
    //       <div className="w-full bg-gray-500 h-[1px]" />
    //       <p className="mx-2 text-sm">OR</p>
    //       <div className="w-full bg-gray-500 h-[1px]" />
    //     </div>
    //     <button className="p-3 rounded bg-white w-full text-sm">
    //       Continue with{" "}
    //       {/* eslint-disable-next-line @next/next/no-img-element */}
    //       <img
    //         src="/icons8-google.svg"
    //         alt="Google icon"
    //         className="w-5 h-5 inline ml-2"
    //       />
    //     </button>
    //   </form>
    // </main>
    <>
      <AuthenticatedTemplate>
        <Link href="/profile">Request Profile Information</Link>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>Please sign-in to see your profile information.</p>
      </UnauthenticatedTemplate>
    </>
  );
};

export default page;
