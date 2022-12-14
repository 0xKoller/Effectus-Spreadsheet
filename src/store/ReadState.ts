import { atom } from "recoil";
import { memoize } from "../utils/memoize";

// Configuracion de atomo de Recoil para la opcion de lectura unicamente
export const ReadState = (key: string) =>
  memoize(key, () =>
    atom({
      key: key,
      default: "",
    })
  );
