import { cellIdtoMatrixIndices } from "./cellIdToMatrixIndices";
import { CellValueState } from "../store/CellValueState";

// Funcion que realizamos el calculo
export const getEquationExpressionFromState = (
  getState: any,
  expression: any,
  notAllowedCellsIds: string[] = []
) => {
  // Filtramos que la celda en la expresion no sea ella misma
  const filterFoundCells = notAllowedCellsIds.filter((cellId) =>
    expression.includes(cellId)
  );

  // Si el array de celdas no validas es mayor que 0, devolvemos error
  if (filterFoundCells.length) {
    return "!ERROR";
  }

  const cellValues = [
    ...Array.from(expression.toUpperCase().matchAll(/[A-Z]+[0-9]+/gi)),
  ]
    .map((regrexOutput: any) => regrexOutput[0])
    .map((cellId: string) => {
      // Obtenemos fila y columna
      const { row, column } = cellIdtoMatrixIndices(cellId);
      let value = "";

      // Obtenemos el valor de la celda
      try {
        value = getState(CellValueState(`${row},${column}`)) || 0;
        if (value.startsWith("=")) {
          // Agregamos la misma celda al array de celdas no permitidas
          notAllowedCellsIds.push(cellId);

          value = getEquationExpressionFromState(
            getState,
            value.slice(1),
            notAllowedCellsIds
          );
        }
      } catch (error) {
        console.log(error);
      }

      return {
        cellId,
        value,
      };
    });

  // Calculo de ecuacion
  const evaluatedExpression = cellValues.reduce(
    (finalExpression, cellValue) =>
      finalExpression.replaceAll(cellValue.cellId, cellValue.value.toString()),
    expression
  );

  // Devolvemos el valor
  return `(${evaluatedExpression})`;
};
