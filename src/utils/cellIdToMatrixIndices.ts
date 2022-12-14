import { charToNumber } from "./charToNumber";

// Aca traducimos el valor de ref de la celda a los indices de la matriz
export const cellIdtoMatrixIndices = (cellId: string) => {
  const columnLetters = cellId.match(/[A-Z]+/)![0];
  const columnNumber = charToNumber(columnLetters);

  const rowNumber = parseInt(cellId.match(/[0-9]+/)![0]) - 1;
  return {
    column: columnNumber,
    row: rowNumber,
  };
};
