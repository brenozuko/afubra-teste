import React, { useState, useEffect, useRef } from "react";
import { canUseDOM } from "vtex.render-runtime";
import "./global.css";

setTimeout(() => {
  if (canUseDOM) {
    let inputRef = document.querySelector(".vtex-address-form-4-x-input");
    inputRef.setAttribute("placeholder", "00-000-000");
  }
}, 1000);

const ShippingPlaceholder = () => {
  return <div></div>;
};

ShippingPlaceholder.schema = {
  title: "Shipping Placeholder",
  description: "Shipping Placeholder",
  type: "object",
};

export default ShippingPlaceholder;
