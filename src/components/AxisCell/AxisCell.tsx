import React, { FunctionComponent } from "react";
import classes from "./AxisCell.module.css";

export type AxisCellProps = { children?: React.ReactNode };

// Celdas encabezado
const AxisCell: FunctionComponent<AxisCellProps> = (props: any) => {
  return <th className={classes.AxisCell}>{props.children}</th>;
};

export default AxisCell;
