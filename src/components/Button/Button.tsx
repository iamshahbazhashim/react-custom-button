import React from "react";
import { IButton } from "./IButton";
import './Button.css'

export const Button = (props: IButton) => {
  const {
    id,
    onClick,
    style,
    type,
    children,
    isDisabled,
  } = props;

  return (
    <div
      id={id}
      className={`btn btn-${type} ${isDisabled && 'disabled'}`} style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}