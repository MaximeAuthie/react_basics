export default function Container() {

  function handleClick() {
    console.log("clic");
  }

  function handleClickWithId(id) {
    console.log("clic" + id);
  }

  function handleClickWithIdAndEventObject(event, id) {
    console.log("Clic" + id);
    console.log(event);
  }
  return (

    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}
      <button onClick={() => console.log("Clic!")}>Click</button>
    
      {/* Mauvaise pratique, peu maintenable */}
      <button onClick={() => {
        console.log("Clic!");
        console.log("Clic!");
        console.log("Clic!");
      }}>Click</button>

      {/* On lui préfère en général ceci */}
      <button onClick={handleClick}>Click</button>


      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
      <button onClick={() => handleClickWithId(12)}>Click</button>

      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}
      <button onClick={(e) => handleClickWithIdAndEventObject(e,13)}>Click</button>
    </div>
  )
}
