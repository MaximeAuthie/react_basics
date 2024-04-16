export default function Card({id, state, changeState}) {
    
  return (
    <div>
      <p>User {id}</p>
      <p>State du parent: {state}</p>
      <button onClick={() => changeState("Bonjour")}>Changer le state</button>
    </div>
  )
}