"use client";

import { WorkSpace } from "@/components/WorkSpace";
import { IMsalContext, MsalAuthenticationTemplate } from "@azure/msal-react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ElementType } from "react";
import { InteractionType } from "@azure/msal-browser";

const page = () => {
  // const authRequest = {
  //   ...loginRequest,
  // };
  return (
    // <MsalAuthenticationTemplate
    //   interactionType={InteractionType.Redirect}
    //   authenticationRequest={authRequest}
    //   errorComponent={ErrorComponent}
    //   loadingComponent={Loading}
    // >
    //   <WorkSpace />;
    // </MsalAuthenticationTemplate>
    <p>yes</p>
  );
};

export default page;

const ErrorComponent = ({ error }: { error: any }) => {
  return <p>An Error Occurred: {error.errorCode}</p>;
};

const Loading = () => {
  return <p>Authentication in progress...</p>;
};
