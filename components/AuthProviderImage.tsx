import {
  faGithub,
  faGoogle,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BuiltInProviderType } from "next-auth/providers";
import { LiteralUnion } from "next-auth/react";
import React from "react";

export const AuthProviderImage = ({
  providerId,
}: {
  providerId: LiteralUnion<BuiltInProviderType, string>;
}) => {
  if (providerId === "azure-ad-b2c") {
    return <FontAwesomeIcon icon={faMicrosoft} className="h-5 w-5" />;
  }
  if (providerId === "google") {
    return <FontAwesomeIcon icon={faGoogle} className="h-5 w-5" />;
  }
  if (providerId === "github") {
    return <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />;
  }

  return null;
};
