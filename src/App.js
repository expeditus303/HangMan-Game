import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import TakeAGuess from "./components/TakeAGuess";
import palavras from "./palavras"

function App() {

  const [classLetters, setClassLetters] = useState(false)

  const [startGame, setStartGame] = useState([])

  const [lettersList, setLettersList] = useState([])

  const [newWord, setNewWord] = useState("")

  const [image, setImage] = useState(0)

  const [hideWord, setHideWord] = useState([])

  const [winner, setWinner] = useState(false)

  const [contador, setContador] = useState(0)

  const [looser, setLooser] = useState(false)



  function createLetterList(newLetter) {
    let newArray = [...lettersList, newLetter]
    setLettersList(newArray)
    setNewWord(newLetter)
    console.log(newArray)
    setClassLetters(true)
  }


  // BREAK 

  
  function Words() {
    let erro = 0
    if (hideWord.length == 0) {
      for (let i = 0; i < startGame.length; i++) {
        hideWord.push('_ ')
      }
    }
  }

  function render() {
    let novaArray = [...startGame]
    let nova = [...hideWord]
    if (novaArray.includes(newWord)) {
      
      for (let i = 0; i < novaArray.length; i++) {
        let index = novaArray.indexOf(newWord)
        while (index !== -1) {
          nova.splice(index, 1, newWord)
          index = novaArray.indexOf(newWord, index + 1)
          setHideWord(nova)
        }
      
      }

      if (!nova.includes('_ ')) {
        setWinner(true)
      }

      console.log('TEM LETRA! ')

    } else {
      console.log('NÃO TEM LETRA')
      if (contador < 6) {
        let seguraContador = contador + 1
        setContador(seguraContador)
        
        setImage(seguraContador)
        if (seguraContador == 6) {
          setLooser(true)
        }
      }

    }
  }
  


  function letsStart() {
    let word = palavras[Math.floor(Math.random() * palavras.length)];
    let result = word
    setClassLetters(!classLetters)
    const wordArray = Array.from(word)
    setStartGame(wordArray)
  }



  return (
    <>
      <Game classLetters={classLetters} onClick={letsStart} image={image} setImage={setImage} hideWord={hideWord} winner={winner} Words={Words} looser={looser} startGame={startGame}/>
      <Letters classLetters={classLetters} setClassLetters={setClassLetters} saveLetter={createLetterList} render={render}/>
      <TakeAGuess classLetters={classLetters} setClassLetters={setClassLetters} />
    </>
  );
}

export default App;
