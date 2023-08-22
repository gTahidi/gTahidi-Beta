"use client";

import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import {
  InteractionStatus,
  InteractionType,
  InteractionRequiredAuthError,
} from "@azure/msal-browser";
import React, { useEffect, useState } from "react";
import ProfileData from "@/components/ProfileData";


const ErrorComponent = ({ error }: any) => {
  return <p>An Error Occurred: {error.errorCode}</p>;
};

const Loading = () => {
  return <p>Authentication in progress...</p>;
};

export default function Profile() {
  return (
    // <MsalAuthenticationTemplate
    //   interactionType={InteractionType.Redirect}
    //   authenticationRequest={authRequest}
    //   errorComponent={ErrorComponent}
    //   loadingComponent={Loading}
    // >
    //   {/* <ProfileContent /> */}
    // </MsalAuthenticationTemplate>
    <p>noth</p>
  );
}
