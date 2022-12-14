import { atom } from "recoil";
import { memoize } from "../utils/memoize";

// Configuracion de atomo de Recoil para la celda
export const CellValueState = (cellId: string) =>
  memoize(cellId, () =>
    atom({
      key: `cell_${cellId}`,
      default: "",
    })
  );
