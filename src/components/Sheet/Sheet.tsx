import { FunctionComponent } from "react";
import Cell, { CELL_HEIGTH, CELL_WIDTH } from "../Cell/Cell";
import Column from "../Columns/Column";
import Row from "../Row/Row";
import { useRecoilValue } from "recoil";
import classes from "./Sheet.module.css";
import { SheetSizeState } from "../../store/SheetSizeState";
import AxisCell from "../AxisCell/AxisCell";
import { numberToChar } from "../../utils/numberToChar";

export type SheetProps = {};

const Sheet: FunctionComponent<SheetProps> = (props: any) => {
  const sheetSize = useRecoilValue(SheetSizeState);
  const numberOfColumns = Math.round(sheetSize.width / CELL_WIDTH);
  const numberOfRows = Math.round(sheetSize.heigth / CELL_HEIGTH);
  return (
    <table className={classes.Sheet}>
      <tbody>
        <Row>
          {[...Array(numberOfColumns + 1)].map((column, columnIndex) =>
            columnIndex !== 0 ? (
              <AxisCell>{numberToChar(columnIndex - 1)}</AxisCell>
            ) : (
              <AxisCell />
            )
          )}
        </Row>
        {[...Array(numberOfRows)].map((row, rowIndex) => (
          <Row key={rowIndex}>
            <AxisCell>{rowIndex + 1}</AxisCell>
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
