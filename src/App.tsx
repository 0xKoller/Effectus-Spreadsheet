import { RecoilRoot } from "recoil";
import SheetsContainer from "./components/Containers/SheetsContainer";
import "./App.css";

function App() {
  return (
    <>
      <div className="introduction-container">
        <h1>Effectus SpreadSheet</h1>
        <h4>Challenge Tecnico para Effectus</h4>
        <p>Tecnologias</p>
        <div className="logos-container">
          <img className="tech" src="https://recoiljs.org/img/logo.svg" />
          <img
            className="tech"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201"
          />
          <img
            className="tech"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
          />
        </div>
      </div>
      <RecoilRoot>
        <SheetsContainer />
      </RecoilRoot>
    </>
  );
}

export default App;
