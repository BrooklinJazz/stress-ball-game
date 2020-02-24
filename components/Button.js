import React from "react";
import { BaseButton } from "./BaseButton";
import { BaseText } from "./BaseText";
export const Button = ({ children, color, ...props }) => (<BaseButton {...props}>
  <BaseText color={color}>{children}</BaseText>
</BaseButton>);
