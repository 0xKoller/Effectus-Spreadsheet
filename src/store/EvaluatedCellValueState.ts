import { selector } from "recoil";
import { memoize } from "../utils/memoize.js";
import { CellValueState } from "./CellValueState.js";
import { evaluate } from "mathjs";
import { getEquationExpressionFromState } from "../utils/getEquationExpressionFromState.js";

export const EvaluatedCellValueState = (cellId: string) =>
  memoize(`evaluatedCell_${cellId}`, () =>
    selector({
      key: `evaluatedCell_${cellId}`,
      get: ({ get }) => {
        const value = get(CellValueState(cellId)) as string;
        if (value.startsWith("=")) {
          try {
            const evalutedExpression = getEquationExpressionFromState(
              get,
              value.toUpperCase().slice(1)
            );

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
