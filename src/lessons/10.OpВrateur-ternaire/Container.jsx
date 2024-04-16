import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [validation, setValidation] = useState(false);

  return (
    <div>
      <h1 className={`${validation ? "valid" : "invalid"}`}>Opération ternaire</h1>
      <form>
        <label htmlFor="consent" >Acceptez-vous?</label>
        <input 
          type="checkbox"
          onClick={() => setValidation(!validation)} />
          <p style={{color:`${validation ? "lightgreen" :"red" }`}}>
            {validation ? "Bravo, vous pouvez envoyer le formulaire" : "Vous devez cocher la case"}
          </p>
      </form>
      {validation ? <p>True</p> : <p>False</p>}
    </div>
  )
}
