import { useSession } from "next-auth/react";
import React from "react";

export const UserTab = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex">
        <div className="text-white text-sm mr-3">
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={session?.user?.image as string}
          alt={session?.user?.name + `s photo`}
          className="w-10 h-10 outline outline-white outline-2 rounded-full"
        />
      </div>
    );
  }

  return <></>;
};
