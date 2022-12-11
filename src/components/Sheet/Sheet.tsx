import React, { ComponentType, FunctionComponent } from "react";
import Cell from "../Cell/Cell";
import Column from "../Columns/Column";
import Row from "../Row/Row";
import classes from "./Sheet.module.css";

export type SheetProps = {};

const Sheet: FunctionComponent<SheetProps> = (props: any) => {
  return (
    <table>
      <tbody>
        <Row>
          <Column>
            <Cell></Cell>
          </Column>
          <Column>
            <Cell></Cell>
          </Column>
          <Column>
            <Cell></Cell>
          </Column>
        </Row>
        <Row>
          <Column>
            <Cell></Cell>
          </Column>
          <Column>
            <Cell></Cell>
          </Column>
          <Column>
            <Cell></Cell>
          </Column>
        </Row>
      </tbody>
    </table>
  );
};

export default Sheet;
