import React from 'react'
import './MainPage.css'
import Questions from './Questions'
export default function MainPage() {
  return (
    <main>
      <div className="headerrow">
        <h1>Top Questions</h1>
        <button>Ask&nbsp;Question</button>
      </div>
      <Questions/>
    </main>
  )
}
