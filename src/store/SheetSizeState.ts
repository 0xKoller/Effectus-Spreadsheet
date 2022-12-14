import { atom } from "recoil";

// Configuracion de atomo de Recoil para el size de la hoja de calculo
export const SheetSizeState = atom({
  key: "SheetSizeState",
  default: {
    width: window.innerWidth,
    heigth: window.innerHeight,
  },
});
