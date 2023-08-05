import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Socials = () => {
  return (
    <section className="bg-gtahidiCream flex justify-center gap-x-6 py-7">
      <a href="https://twitter.com/UjaoTech">
        <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
      </a>
      <a href="https://www.facebook.com/Ujaotech2023">
        <FontAwesomeIcon
          icon={faFacebook}
          className="w-5 h-5 hover:text-blue-600 transition-colors"
        />
      </a>
      <a href="https://www.instagram.com/ujaotech/">
        <FontAwesomeIcon
          icon={faInstagram}
          className="w-5 h-5 hover:text-pink-600 transition-colors"
        />
      </a>
      <a href="https://www.linkedin.com/company/ujaotechnologies/">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="w-5 h-5 hover:text-blue-600 transition-colors"
        />
      </a>
      <a href="https://www.youtube.com/@ujaotech/videos">
        <FontAwesomeIcon
          icon={faYoutube}
          className="w-5 h-5 hover:text-red-600 transition-colors"
        />
      </a>
    </section>
  );
};
