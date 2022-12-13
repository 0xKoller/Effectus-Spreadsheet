import { atom } from "recoil";
export const SheetSizeState = atom({
  key: "SheetSizeState",
  default: {
    width: window.innerWidth,
    heigth: window.innerHeight,
  },
});
