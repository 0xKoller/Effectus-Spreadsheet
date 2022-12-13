import { ChangeEvent, FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import { ReadState } from "../../store/ReadState";
import classes from "./SheetsContainer.module.css";
import Sheet from "../Sheet/Sheet";

export type SheetsContainerProps = {};

const SheetsContainer: FunctionComponent<SheetsContainerProps> = (
  props: any
) => {
  const [readState, setReadState] = useRecoilState<string>(
    ReadState("read-only")
  );

  const updateReadState = (event: ChangeEvent<HTMLInputElement>) => {
    setReadState(`${event.target.checked}`);
  };

  return (
    <>
      <div className={classes.Options}>
        <p>Options</p>
        <div>
          <label htmlFor="read-only">Read-only</label>
          <input
            type="checkbox"
            name="read-only"
            id="read-only"
            onChange={updateReadState}
            className={classes.Checkbox}
          />
          <span className={classes.Checkmark}></span>
        </div>
      </div>
      <Sheet />
    </>
  );
};

export default SheetsContainer;
