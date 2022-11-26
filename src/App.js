import React, { useState } from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import TakeAGuess from "./components/TakeAGuess";

function App() {

  const [classLetters, setClassLetters] = useState(false)



  return (
    <>
      <Game classLetters={classLetters} setClassLetters={setClassLetters} onClick={() => setClassLetters(!classLetters)} />
      <Letters classLetters={classLetters} setClassLetters={setClassLetters} />
      <TakeAGuess classLetters={classLetters} setClassLetters={setClassLetters}/>
    </>
  );
}

export default App;
