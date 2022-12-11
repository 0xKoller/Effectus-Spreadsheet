import React, { ComponentType, FunctionComponent } from "react";
import classes from "./Column.module.css";

export type ColumnProps = { children: React.ReactNode };

const Column: FunctionComponent<ColumnProps> = (props: any) => {
  return <td>{props.children}</td>;
};

export default Column;
