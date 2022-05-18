import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">Stack<b>Overflow</b></Link>
      <form action="" className='search'>
        <input type="text" placeholder='Search' />
      </form>
      <Link className="logo" to="/profile"><b>Jackie</b></Link>
      </header>
  )
}
