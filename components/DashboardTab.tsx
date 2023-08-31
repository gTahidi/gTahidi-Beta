import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const DashboardTab = ({
  name,
  icon,
}: {
  name: string;
  icon: IconProp;
}) => {
  return (
    <div className="flex items-center px-[5%] show py-3 my-3">
      <FontAwesomeIcon icon={icon} className="w-5 h-5 mr-5" />
      <p>{name}</p>
    </div>
  );
};
