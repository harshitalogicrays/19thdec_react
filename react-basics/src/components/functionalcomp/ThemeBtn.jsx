import React from 'react'
import { useTheme } from './ThemeContext'

const ThemeBtn = () => {
    const {themeMode, toggleTheme} =  useTheme()
  return (
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" onClick={()=>toggleTheme()}  checked={themeMode=="dark"}/>
    </div>
  )
}

export default ThemeBtn
