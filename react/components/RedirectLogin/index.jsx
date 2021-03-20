import React, { useState, useEffect, useRef } from "react";
import { canUseDOM } from "vtex.render-runtime";
import "./global.css";

const RedirectLogin = () => {
  if (canUseDOM) {
    let getButton = document.querySelector(".vtex-login-2-x-container")
      .lastChild.firstChild;

    getButton.addEventListener("click", () => {
      setTimeout(() => {
        document
          .querySelector(".vtex-login-2-x-emailPasswordOptionBtn")
          .firstChild.click();
      }, 900);
    });
  }

  return <div></div>;
};

RedirectLogin.schema = {
  title: "Redirect Login",
  description: "Redirect Login",
  type: "object",
};

export default RedirectLogin;
