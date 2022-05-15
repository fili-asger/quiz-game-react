import { useEffect, useState } from 'react';
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import Button from '@mui/material/Button';
import QuestionBank from "./QuestionBank"


export default function Questions() {
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  
  
    function increseCount() {
    if (count == QuestionBank.length - 1) return setIsPlaying(false)
    setCount(count + 1)
    }

  function isCoreect(event) {
      if (event.target.value === QuestionBank[count].correct_answer) {
        setScore(score + 1)
      }
      increseCount()
  }

    function createButton(option, index) {
      return <Button value={option} onClick={isCoreect} key={index} variant="contained" id="wrong">{option}</Button>
    }
  
  function showButtons() {
    if (isPlaying == true) {
      return <>
      <h3>Please answer the following questions...</h3>
      <h2>Score = {score}</h2>
      <h2>{QuestionBank[count].question}</h2>
      <Button value={QuestionBank[count].correct_answer} onClick={isCoreect} variant="contained" id="wrong">{QuestionBank[count].correct_answer}</Button>
      {QuestionBank[count].incorrect_answers.map(createButton)}
    </>
    } else {
      return <div>
        <h2>Your final score was {score} out of {QuestionBank.length}</h2>
        <Button href="/end" variant="contained">Go to the end</Button>
        </div>
    }
  }
  
  return (
      <>
      {showButtons()}
    </>
  );
}
