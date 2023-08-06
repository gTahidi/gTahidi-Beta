import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Socials } from "./Socials";

export const SocialsSection = () => {
  return (
    <section className="bg-gtahidiCream flex justify-center gap-x-6 py-7">
      <Socials />
    </section>
  );
};
