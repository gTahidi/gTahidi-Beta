import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const DashboardTab = ({
  name,
  icon,
}: {
  name: string;
  icon: IconProp;
}) => {
  const href: string = getHref(name);

  return (
    <Link className="flex items-center px-[5%] py-3 my-3" href={href}>
      <FontAwesomeIcon icon={icon} className="w-5 h-5 mr-5" />
      <p>{name}</p>
    </Link>
  );
};

function getHref(name: string): string {
  const lowerCaseReplacedString = name.toLowerCase().replace(" ", "-");

  if (name === "Dashboard") {
    return "/dashboard";
  } else {
    return `/dashboard/${lowerCaseReplacedString}`;
  }
}
