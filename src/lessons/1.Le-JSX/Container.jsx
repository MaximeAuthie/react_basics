export default function Container() {

  const txt = "text";

  function handleClick(event, id) {
    console.log(`event : ${event}`);
    console.log(`id: ${id}`);
  }

  return (
    <div>
        <ul className="list">
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>{10 +10}</li>
          <li>{"ab" + "cd"}</li>
          <li>{"Le chat saute".toUpperCase()}</li>
          <li>{txt}</li>
          <li>{["a",2,"c",4]}</li> {/*Je peux afficher des tableaux d'éléments primitifs (mais pas des objets)*/}
          <li>{[<span>Hello world</span>]}</li> {/*Je peux afficher des tableaux d'éléments JSX*/}
          <button onClick={(event) => handleClick(585)}>Pouet</button>
        </ul>
    </div>
  )
}