import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { atom, useRecoilState } from "recoil";
import classes from "./Cell.module.css";

const CellValueState = atom({
  key: "cell",
  default: "test",
});

export type CellProps = {
  children: React.ReactNode;
};

const Cell: FunctionComponent<CellProps> = (props) => {
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
