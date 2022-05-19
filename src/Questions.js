import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Questions.css'

export default function Questions() {
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    axios.get(`https://medrum.herokuapp.com/articles`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      })
  }, [])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(APIData)
    }
  }

  return (
    <>
      <input placeholder='Search...'
        onChange={(e) => searchItems(e.target.value)}
      />
      <div className="scroll">
        {searchInput.length > 1 ? (
          filteredResults.map((item) => {
            return (
              <>
                <div className='questionrow' id={item.id}>
                  <div className='questionstats'>0<span>votes</span></div>
                  <div className='questionstats'>1<span>answers</span></div>
                  <div className='questionstats'>6<span>views</span></div>
                  <div className='questiontitle'>
                    <div className='questionlink'><a href={item.url}>{item.title}</a></div>
                    {/* <p className='questionbody'>{item.body.slice(0, 140)}...</p> */}
                    <div className='tags'>javascript</div>
                    <div className='tags'>css</div>
                    <div className='tags'>react</div>
                    <div className='whoandwhen'>
                      Asked {item.ago} ago
                      {/* <Link to="/">Jackie</Link> */}
                    </div>
                  </div>
                </div>
              </>
            )
          })
        ) : (
          APIData.map((item) => {
            return (
              <div className='questionrow' id={item.id}>
                <div className='questionstats'>0<span>votes</span></div>
                <div className='questionstats'>1<span>answers</span></div>
                <div className='questionstats'>6<span>views</span></div>


                <div className='questiontitle'>
                  <div className='questionlink'><a href={item.url}>{item.title}</a></div>
                  {/* <p className='questionbody'>{item.body.slice(0, 140)}...</p> */}
                  <div className='tags'>javascript</div>
                  <div className='tags'>css</div>
                  <div className='tags'>react</div>
                  <div className='whoandwhen'>
                    Asked {item.ago} ago
                    {/* <Link to="/">Jackie</Link> */}
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </>

  )
}
