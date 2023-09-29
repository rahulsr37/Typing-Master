import { useState } from "react";
import "./App.css";
import Level from "./components/Level";
const sentence1 = "This is a test sentence!";
const sentence2 = "This is a test sentence! Lorem ipsum dolor sit";
const sentence3 =
  "This is a test sentence! amet consectetur adipisicing elit. Deleniti, ad!";
const GIVENTIME = 5;

function App() {
  const [level, setLevel] = useState(1);

  const renderLevel = () => {
    if (level === 1) {
      return <Level sentence={sentence1} setLevel={setLevel} GIVENTIME={GIVENTIME} />;
    }
    if (level === 2) {
      return <Level sentence={sentence2} setLevel={setLevel} GIVENTIME={GIVENTIME*2}/>;
    }
    if (level === 3) {
      return <Level sentence={sentence3} setLevel={setLevel} GIVENTIME={GIVENTIME*3} />;
    } else {
      return "GAME OVER";
    }
  };

  return <>{renderLevel()}</>;
}

export default App;
