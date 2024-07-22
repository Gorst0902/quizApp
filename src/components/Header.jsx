import React from 'react'
import quiz from '../assets/quiz-logo.png'

export default function Header() {
  return (
    <header>
        <img src={quiz} alt="" />
        <h1>ReactQuiz</h1>
    </header>
  )
}
