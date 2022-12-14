import {
  ChangeEvent,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CellValueState } from "../../store/CellValueState";
import { EvaluatedCellValueState } from "../../store/EvaluatedCellValueState";
import { ReadState } from "../../store/ReadState";
import classes from "./Cell.module.css";

export const CELL_WIDTH = 100;
export const CELL_HEIGTH = 25;

export type CellProps = {
  cellId: string;
};

const Cell: FunctionComponent<CellProps> = (props: any) => {
  const readOnly = useRecoilValue<string>(ReadState("read-only"));

  // Valores de la celda
  const [cellValue, setCellValue] = useRecoilState<string>(
    CellValueState(props.cellId)
  );

  // Evalua la ecuacion en la celda
  const evaluatedCellValueState = useRecoilValue<string>(
    EvaluatedCellValueState(props.cellId)
  );

  // Toggle para cambiar entre input a label y viceversa
  const [isEditMode, setIsEditMode] = useState(false);

  // Referencia para ubicar a la celda
  const inputRef = useRef<HTMLInputElement>(null);

  // Funcion para cambiar de label a input
  const changeLabelToInput = () => {
    setIsEditMode(true);
    // Este timeout nos permite hacer focus al input al instante que le damos clic
    // si no realizamos esto, debemos de realizar doble click en el mismo
    setTimeout(() => {
      inputRef.current?.focus();
    });
  };

  // Cambiar de input a label
  const changeInputToLabel = () => {
    setIsEditMode(false);
  };

  // Eliminar el foco del elemento al dar Enter/Esc
  const defocusInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      setIsEditMode(false);
    }
  };

  // Actualizar estado de la celda
  const updateCellState = (event: ChangeEvent<HTMLInputElement>) =>
    setCellValue(event.target.value);

  // Verificamos si el user realizo click afuera de la celda o no
  const outsideInput = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== props.cellId) {
      changeInputToLabel();
    }
  };

  // Evento que esta al tanto del clic
  useEffect(() => {
    document.addEventListener("click", outsideInput);
    return document.addEventListener("click", outsideInput);
  });

  // Este primer ternario verifica si esta en modo lectura o no
  return readOnly === "false" ? (
    isEditMode ? (
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
    )
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
