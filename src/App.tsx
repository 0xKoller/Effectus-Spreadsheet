import { RecoilRoot } from "recoil";
import SheetsContainer from "./components/Containers/SheetsContainer";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <SheetsContainer />
    </RecoilRoot>
  );
}

export default App;
