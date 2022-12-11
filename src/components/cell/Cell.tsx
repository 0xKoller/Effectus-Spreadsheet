import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState } from "recoil";
import { CellValueState } from "../../store/CellValueState";
import classes from "./Cell.module.css";

export type CellProps = {};

const Cell: FunctionComponent<CellProps> = (props: any) => {
  const [cellValue, setCellValue] = useRecoilState<string>(CellValueState);
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null);

  const changeLabelToInput = () => {
    setIsEditMode(true);
  };

  const changeInputToLabel = () => {
    setIsEditMode(false);
  };

  const updateCellState = (event: ChangeEvent<HTMLInputElement>) =>
    setCellValue(event.target.value);

  const outsideInput = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== "2") {
      changeInputToLabel();
    }
  };

  useEffect(() => {
    document.addEventListener("click", outsideInput);
    return document.addEventListener("click", outsideInput);
  });

  return isEditMode ? (
    <input
      ref={inputRef}
      data-cell-id={"2"}
      value={cellValue}
      onChange={updateCellState}
    />
  ) : (
    <div data-cell-id={"2"} onClick={changeLabelToInput}>
      {cellValue}
    </div>
  );
};

export default Cell;
