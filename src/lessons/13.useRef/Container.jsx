import { useRef, useState } from "react";

//! 1. Isoler une valeur parmi les mises à jour.
//! 2. Sélectionner un élément.

export default function Container() {

  const [state, setState]= useState(0);
  const countRef = useRef(0);


  function handleCountRef() {
    countRef.current++;
    console.log(`La valeur de countRef est : ${countRef.current}`);
    console.log(txtRef.current);
  }

  const txtRef = useRef();
  console.log(`La valeur de txtRef est : ${countRef.current}`);
  return (
    <div>
      <h1>Comprendre les refs</h1>
      <button onClick={() => handleCountRef()}>Incrémenter la réf</button><br />
      <button onClick={() => setState(state+1)}>Incrémenter le state</button>
      <p>La valeur de countRef est de : {countRef.current}</p>
      <p>La valeur du state est de : {state}</p>

      <p ref={txtRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dicta.</p>
    </div>
  )
}
