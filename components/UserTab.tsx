import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import React from "react";

export const UserTab = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex ml-auto">
        <div className="text-black text-sm mr-3">
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
        </div>
        {session.user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={session?.user?.image as string}
            alt={session?.user?.name + `s photo`}
            className="w-10 h-10 outline outline-gtahidiPink outline-2 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 outline outline-gtahidiPink outline-2 rounded-full relative">
            <FontAwesomeIcon
              icon={faUser}
              className="w-5 h-5 center-absolutely"
            />
          </div>
        )}
      </div>
    );
  }

  return <></>;
};
