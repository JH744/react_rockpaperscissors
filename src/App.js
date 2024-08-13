import "./App.css";
import Box from "./components/Box.jsx";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://previews.123rf.com/images/8dda/8dda1605/8dda160500010/56822337-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EB%8F%8C.jpg",
  },
  scissor: {
    name: "Scissors",

    img: "https://cafe24.poxo.com/ec01/he201820/HOvhRhvOk+Cp2KY4JuusAjlMOEtjc5iq9hbF1jVsI4i4c1HRH2R0N1Y2D2oUph8wRO0XgG+DjO5jhi4yYCXKnA==/_/web/product/big/201808/95f07cfda34c528acd09d6379051189e.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={userSelect} />
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
