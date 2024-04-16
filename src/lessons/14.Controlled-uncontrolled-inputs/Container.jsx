import { useState, useRef } from "react"
import "./Container.css"

export default function Container() {

  const [state, setState] = useState("");
  const emailRef = useRef();
  const handleInput = (e) => {
    setState(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Votre pseudo est "${state}" et votre email est "${emailRef.current.value}"`);
  }

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Votre nom</label>
        <input
          onChange={handleInput}
          value={state}
          type="text"
          id="pseudo" />

        <label htmlFor="email">Votre email</label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email" />

        <button>Envoyer</button>
      </form>
      {state && <p>Votre pseudo : {state}</p>}
    </div>
  )
}
