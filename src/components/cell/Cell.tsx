import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import classes from "./Cell.module.css";

type CellProps = {
  children: React.ReactNode;
};

const Cell: FunctionComponent<CellProps> = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null);

  const changeLabelToInput = () => {
    setIsEditMode(true);
  };

  const changeInputToLabel = () => {
    setIsEditMode(false);
  };

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
    <input ref={inputRef} data-cell-id={"2"} />
  ) : (
    <div data-cell-id={"2"} onClick={changeLabelToInput}>
      {props.children}
    </div>
  );
};

export default Cell;
