import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Bienvenu sur NotesMania</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque porro accusamus ipsum quo beatae numquam molestiae voluptatem deserunt quibusdam, culpa repellat repellendus reiciendis aliquid consequatur?</p>
    
      <button 
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Désactiver le dark mode" : "Activer le dark mode"}
      </button>
    </div>
  )
}
