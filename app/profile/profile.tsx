"use client";

import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import {
  InteractionStatus,
  InteractionType,
  InteractionRequiredAuthError,
} from "@azure/msal-browser";
import React, { useEffect, useState } from "react";
import { loginRequest } from "@/authConfig";
import { callMsGraph } from "@/util/MsGraphApiCall";
import { ProfileData } from "@/components/ProfileData";

const ProfileContent = () => {
  const { instance, inProgress } = useMsal();
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    if (!graphData && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((response) => setGraphData(response))
        .catch((e) => {
          if (e instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect({
              ...loginRequest,
              account: instance.getActiveAccount()!,
            });
          }
        });
    }
  }, [inProgress, graphData, instance]);

  return <div>{graphData ? <ProfileData graphData={graphData} /> : null}</div>;
};

const ErrorComponent = ({ error }: any) => {
  return <p>An Error Occurred: {error.errorCode}</p>;
};

const Loading = () => {
  return <p>Authentication in progress...</p>;
};

export default function Profile() {
  const authRequest = {
    ...loginRequest,
  };

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
      errorComponent={ErrorComponent}
      loadingComponent={Loading}
    >
      <ProfileContent />
    </MsalAuthenticationTemplate>
  );
}
