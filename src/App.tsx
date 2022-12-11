import Cell from "./components/Cell/Cell";
import { RecoilRoot } from "recoil";
import SheetsContainer from "./components/Containers/SheetsContainer";

function App() {
  return (
    <RecoilRoot>
      <SheetsContainer />
    </RecoilRoot>
  );
}

export default App;
