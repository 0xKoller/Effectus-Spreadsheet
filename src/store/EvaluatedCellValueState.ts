import { selector } from "recoil";
import { memoize } from "../utils/memoize";
import { CellValueState } from "./CellValueState";
import { evaluate } from "mathjs";
import { getEquationExpressionFromState } from "../utils/getEquationExpressionFromState";

// Evaluamos el estado de la celda
export const EvaluatedCellValueState = (cellId: string) =>
  memoize(`evaluatedCell_${cellId}`, () =>
    selector({
      key: `evaluatedCell_${cellId}`,
      get: ({ get }) => {
        // Obtenemos el valor de la celda como un string
        const value = get(CellValueState(cellId)) as string;
        // Consultamos si comienza con =, para verificar si es una formula
        if (value.startsWith("=")) {
          try {
            const evalutedExpression = getEquationExpressionFromState(
              get,
              // El slice es para eliminar el =
              value.toUpperCase().slice(1)
            );
            // Si la expresion devuelve error, se ilustrara error en la celda
            if (evalutedExpression === "(!ERROR)") {
              return "!ERROR";
            }

            return evaluate(evalutedExpression);
          } catch (error) {
            console.log(error);
            return value;
          }
        }
        return value;
      },
    })
  );
