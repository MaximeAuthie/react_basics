import { useState } from "react";
import Card from "./Card";

export default function Container() {
  
  const [state, setState] = useState("Hello world");

  const id = 1234;

  return (
    <div>
      <p>State du container : {state}</p>
      <Card id={id} state={state} changeState={setState}/>
    </div>
  )
}
