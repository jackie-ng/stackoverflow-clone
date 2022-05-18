import React from 'react'
import './MainPage.css'
export default function MainPage() {
  return (
    <main>
      <div className="headerrow">
        <h1>Top Questions</h1>
        <button>Ask&nbsp;Question</button>
      </div>
      <div className='questionrow'>
        <div className='questionstats'>0<span>votes</span></div>
        <div className='questionstats'>1<span>answers</span></div>
        <div className='questionstats'>6<span>views</span></div>
        <div className='questiontitle'>
          <div className='questionlink'>Hello</div>
          <div className='tags'>Tags</div>
        </div>
      </div>
    </main>
  )
}
