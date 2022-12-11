import { atom, useRecoilState } from "recoil";

export const CellValueState = atom({
  key: "cell",
  default: "test",
});
