import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <form
      className="mx-auto flex flex-col items-center mt-5 w-2/3 sm:w-1/3"
      method="post"
      action="/api/auth/callback/credentials"
    >
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <p className="text-2xl font-semibold my-5">Welcome educator 👋</p>

      <label>
        Username
        <input
          name="username"
          type="text"
          className="w-full text-sm p-3 focus:outline-gtahidiPurple focus:outline"
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          className="w-full text-sm p-3 focus:outline-gtahidiPurple focus:outline"
        />
      </label>
      <button
        type="submit"
        className="bg-gtahidiPurple p-3 rounded text-white font-medium w-full mt-2"
      >
        Continue
      </button>
    </form>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
