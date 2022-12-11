import React, { ComponentType, FunctionComponent } from "react";
import Sheet from "../Sheet/Sheet";
import classes from "./SheetsContainer.module.css";

export type SheetsContainerProps = {};

const SheetsContainer: FunctionComponent<SheetsContainerProps> = (
  props: any
) => {
  return <Sheet />;
};

export default SheetsContainer;
