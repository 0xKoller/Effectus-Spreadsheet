import React, { ComponentType, FunctionComponent } from "react";
import classes from "./Row.module.css";

export type RowProps = { children: React.ReactNode };

const Row: FunctionComponent<RowProps> = (props: any) => {
  return <tr>{props.children}</tr>;
};

export default Row;
