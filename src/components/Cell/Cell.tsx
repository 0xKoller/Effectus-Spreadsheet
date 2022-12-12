import {
  ChangeEvent,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CellValueState } from "../../store/CellValueState.js";
import { EvaluatedCellValueState } from "../../store/EvaluatedCellValueState.js";
import classes from "./Cell.module.css";

export const CELL_WIDTH = 100;
export const CELL_HEIGTH = 25;

export type CellProps = {
  cellId: string;
};

const Cell: FunctionComponent<CellProps> = (props: any) => {
  const [cellValue, setCellValue] = useRecoilState<string>(
    CellValueState(props.cellId)
  );
  const evaluatedCellValueState = useRecoilValue<string>(
    EvaluatedCellValueState(props.cellId)
  );
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeLabelToInput = () => {
    setIsEditMode(true);
    setTimeout(() => {
      inputRef.current?.focus();
    });
  };

  const changeInputToLabel = () => {
    setIsEditMode(false);
  };

  const defocusInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditMode(false);
    }
  };

  const updateCellState = (event: ChangeEvent<HTMLInputElement>) =>
    setCellValue(event.target.value);

  const outsideInput = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== props.cellId) {
      changeInputToLabel();
    }
  };

  useEffect(() => {
    document.addEventListener("click", outsideInput);
    return document.addEventListener("click", outsideInput);
  });

  return isEditMode ? (
    <input
      className={classes.CellInput}
      ref={inputRef}
      data-cell-id={props.cellId}
      value={cellValue}
      onChange={updateCellState}
      onKeyDown={defocusInput}
    />
  ) : (
    <div
      className={classes.CellLabel}
      data-cell-id={props.cellId}
      onClick={changeLabelToInput}
    >
      {evaluatedCellValueState}
    </div>
  );
};

export default Cell;