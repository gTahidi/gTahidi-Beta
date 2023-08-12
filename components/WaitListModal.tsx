import { addUserToWaitlist } from "@/firebase/firestore";
import { modalTransition } from "@/framer/Motion";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleNotch,
  faCircleXmark,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Overlay } from "./Overlay";

export const WaitListModal = ({ closeFn }: { closeFn: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleJoiningWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    const id = uid(8);
    await addUserToWaitlist(
      {
        name,
        email,
        phoneNumber,
      },
      id
    );
    setIsLoading(false);
  };

  return (
    <Overlay>
      <motion.form
        className="bg-white rounded-lg p-5 md:w-1/3 w-11/12"
        {...modalTransition}
        onSubmit={handleJoiningWaitlist}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-lg">Joining the waitlist!</h2>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="cursor-pointer text-purple-900 h-4 w-4"
            onClick={closeFn}
          />
        </div>
        <p className="text-xs text-gray-500">Please enter your details</p>
        <div className="relative">
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          />
          <input
            type="text"
            placeholder="Enter your name"
            className="placeholder:text-sm p-2 border rounded-md w-full pl-9 outline-none text-sm"
            required
            ref={emailRef}
            name="name"
          />
        </div>
        <div className="relative my-5">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="placeholder:text-sm p-2 border rounded-md w-full pl-9 outline-none text-sm"
            required
            ref={emailRef}
            name="email"
          />
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          />
          <input
            type="tel"
            placeholder="phone number (optional)"
            className="placeholder:text-sm p-2 border rounded-md w-full pl-9 outline-none text-sm"
            required
            ref={emailRef}
            name="phoneNumber"
          />
        </div>
        <button className="rounded-full w-full text-xs text-white py-3 mt-5 bg-purple-900 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors">
          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : "Join"}
        </button>
        <div className="flex justify-center" onClick={closeFn}>
          <p className="mx-auto py-2 cursor-pointer text-sm font-medium">
            Cancel
          </p>
        </div>
      </motion.form>
    </Overlay>
  );
};
