import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import TakeAGuess from "./components/TakeAGuess";
import alfabet from "./alfabet";
import words from "./words"

function App() {

  const [disableInput, setDisableInput] = useState(true)     // to disable inpunt
  const [usedLetters, setUsedLetters] = useState(alfabet)    // to disable letters buttons
  const [errors, setErrors] = useState(0)                    // to count user errors
  const [gameWord, setGameWord] = useState([])               // word that user is trying to guess (viewed as _ on screen)
  const [chosenWord, setChoseWord] = useState([])            // word that was random picked (the answer)
  const [wordColor, setWordColor] = useState("black")        // word color 
  const [guessInput, setGuessInput] = useState("")                // input to try a guess

  function startGame() {                                     // function to start the game on the button
    randomWord()
    setDisableInput(false)
    setUsedLetters([])
    setErrors(0)
    setWordColor("black")
    setGuessInput("")
  }

  function randomWord() {                                    // function to pull a random word from word.js (i is an index)
    const i = Math.floor(Math.random() * words.length)
    const word = words[i]
    const wordArray = Array.from(word)
    setChoseWord(wordArray)
    let underlines = []
    wordArray.forEach(() => underlines.push("_ "))
    setGameWord(underlines)
  }

  function clickLetter(clickedLetter) {                     // function to the letter clicked (and than disable the button)  
    setUsedLetters([...usedLetters, clickedLetter])

    if (chosenWord.includes(clickedLetter)) {
      letterIsRigth(clickedLetter)
    } else {
      letterIsWrong(clickedLetter)
    }
  }

  function letterIsRigth(clickedLetter) {                     // fuction used when click on a right letter to change "_" for the letter
    const newGameWord = [...gameWord]

    chosenWord.forEach((chosenLetter, i) => {
      if (chosenWord[i] === clickedLetter) {
        newGameWord[i] = chosenLetter
      }
    })
    setGameWord(newGameWord)

    // verify if user wins
    if (!newGameWord.includes("_ ")) {
      setWordColor("green")
      endGame()
    }
  }

  function letterIsWrong(clickedLetter) {                     // fuction used when click on a wrong letter
    const newErrors = errors + 1
    setErrors(newErrors)

    if (newErrors === 6) {
      setWordColor("red")
      endGame()
    }
  }

  function guessWord() {
    let chosenWordString = ""
    chosenWord.forEach(letter => chosenWordString += letter)

    if (chosenWordString === guessInput) {
      setWordColor("green")
    } else {
      setWordColor("red")
      setErrors(6)
      alert("Errrrrrrrrou")
    }

    endGame()
  }

  function endGame() {                                         // fuction to disable buttons and show the word on end of the game
    setDisableInput(true)
    setUsedLetters(alfabet)
    setGameWord(chosenWord)
  }

  return (
    <>
      <Game
        startGame={startGame}
        errors={errors}
        gameWord={gameWord}
        wordColor={wordColor}
      />
      <Letters
        usedLetters={usedLetters}
        clickLetter={clickLetter}
      />
      <TakeAGuess
        disableInput={disableInput}
        guessInput={guessInput}
        setGuessInput={setGuessInput}
        guessWord={guessWord}
      />
    </>
  );
}

export default App;
