import React, { ComponentType, FunctionComponent } from "react";
import Cell, { CELL_HEIGTH, CELL_WIDTH } from "../Cell/Cell";
import Column from "../Columns/Column";
import Row from "../Row/Row";
import { useRecoilValue } from "recoil";
import classes from "./Sheet.module.css";
import { SheetSizeState } from "../../store/SheetSizeState";

export type SheetProps = {};

const Sheet: FunctionComponent<SheetProps> = (props: any) => {
  const sheetSize = useRecoilValue(SheetSizeState);

  const numberOfColumns = sheetSize.width / CELL_WIDTH;
  const numberOfRows = sheetSize.heigth / CELL_HEIGTH;
  return (
    <table className={classes.Sheet}>
      <tbody>
        {[...Array(numberOfRows)].map((row, rowIndex) => (
          <Row key={rowIndex}>
            {[...Array(numberOfColumns)].map((column, columnIndex) => (
              <Column key={columnIndex}>
                <Cell cellId={`${rowIndex},${columnIndex}`} />
              </Column>
            ))}
          </Row>
        ))}
      </tbody>
    </table>
  );
};

export default Sheet;
