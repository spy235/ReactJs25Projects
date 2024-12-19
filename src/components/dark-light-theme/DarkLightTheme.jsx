import React from 'react'
import useLocalStroage from './useLocalStroage';
import './style.css'

const DarkLightTheme = () => {
    const [theme, setTheme] = useLocalStroage("theme", "light");

    function handleToggleTheme() {
        setTheme(theme==="light"?"dark":"light");
    }
  return (
    <div className="light-dark-mode" data-theme={theme}>
    <div className="container">
      <p>Hello World !</p>
      <button onClick={handleToggleTheme}>Change Theme</button>
    </div>
  </div>
  )
}

export default DarkLightTheme
