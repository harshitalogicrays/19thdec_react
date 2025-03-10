import React, { createContext, useContext, useState } from 'react'
const theme = createContext()
const ThemeContext = ({children}) => {
    const [themeMode,setThemeMode] = useState("light")
    const toggleTheme =  ()=> themeMode=="light" ? setThemeMode("dark"): setThemeMode("light")
    const styles ={
        backgroundColor : themeMode=="light"?"wheat":"gray",
        color : themeMode=="light"?"black":"white",
        height:'100%'
    } 
  return (
    <theme.Provider value={{themeMode,toggleTheme}}>
        <div style={styles}>{children}</div>
    </theme.Provider>
  )
}
export default ThemeContext
export const useTheme =  ()=>useContext(theme)