import { atom } from "recoil";
import { memoize } from "../utils/memoize";
export const ReadState = (key: string) =>
  memoize(key, () =>
    atom({
      key: key,
      default: "",
    })
  );
