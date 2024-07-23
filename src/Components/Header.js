import React from 'react'
import { useState } from 'react'
import { LIGHT_MODE, DARK_MODE } from "../utilis/constant"

const Header = () => {
  
  const [darkMode , SetDarkMode] = useState(LIGHT_MODE)
  const handlescreencolor = () => {
    return(
      // SetDarkMode == true ? 'https://static.thenounproject.com/png/2856481-200.png' : 'https://static.thenounproject.com/png/4808961-200.png'
      darkMode === LIGHT_MODE ? SetDarkMode(DARK_MODE) : SetDarkMode(LIGHT_MODE)
      
    )
  }
  return (
    <div className='flex justify-end items-center gap-4'>
    <div className=''>
      <img onClick={handlescreencolor}  src={darkMode} className='w-10'/>
    </div>
    <div>
      <button type='button' className='btn'>Sign In</button>
    </div>
    </div>
  )
}

export default Header