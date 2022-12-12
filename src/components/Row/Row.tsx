import React, { FunctionComponent } from "react";

export type RowProps = { children: React.ReactNode };

const Row: FunctionComponent<RowProps> = (props: any) => {
  return <tr>{props.children}</tr>;
};

export default Row;
