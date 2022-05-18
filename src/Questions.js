import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Questions.css'
export default function Questions() {


  return (
    <div className='questionrow'>
    <div className='questionstats'>0<span>votes</span></div>
    <div className='questionstats'>1<span>answers</span></div>
    <div className='questionstats'>6<span>views</span></div>
    <div className='questiontitle'>
      <div className='questionlink'>Hello</div>
      <div className='tags'>javascript</div>
      <div className='tags'>css</div>
      <div className='tags'>react</div>
    <div className='whoandwhen'>
      Asked 2 mins ago
      <Link to="/">Jackie</Link>
    </div>
    </div>
  </div>
  )
}
