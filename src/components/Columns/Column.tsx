import React, { FunctionComponent } from "react";
import classes from "./Column.module.css";

export type ColumnProps = { children: React.ReactNode };

// Columnas
const Column: FunctionComponent<ColumnProps> = (props: any) => {
  return <td className={classes.Column}>{props.children}</td>;
};

export default Column;
