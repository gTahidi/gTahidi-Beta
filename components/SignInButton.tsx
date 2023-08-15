import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

export const SignInButton = () => {
  const { instance } = useMsal();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLogin = (loginType: "popup" | "redirect") => {
    setAnchorEl(null);

    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.error(`loginPopup failed: ${e}`);
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.error(`loginRedirect failed: ${e}`);
      });
    }
  };

  return (
    <div>
      <button
        onClick={(event) => setAnchorEl(event.currentTarget as unknown as any)}
        className="show"
      >
        Login
      </button>
      <div
      // id="menu-appbar"
      // // anchorEl={anchorEl}
      // anchorOrigin={{
      //   vertical: "top",
      //   horizontal: "right",
      // }}
      // keepMounted
      // transformOrigin={{
      //   vertical: "top",
      //   horizontal: "right",
      // }}
      // open={open}
      // onClose={() => setAnchorEl(null)}
      >
        <button
          onClick={() => handleLogin("popup")}
          key="loginPopup"
          className="show"
        >
          Sign in using Popup
        </button>
        <button
          onClick={() => handleLogin("redirect")}
          key="loginRedirect"
          className="show"
        >
          Sign in using Redirect
        </button>
      </div>
    </div>
  );
};
