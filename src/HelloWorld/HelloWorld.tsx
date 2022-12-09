import React, { useState } from "react";
import { FormComponentProps } from "src/formTypes";

export const HelloWorld = ({
  config,
  payload,
  onChange,
}: FormComponentProps) => {
  return <div>Hello World :)</div>;
};
