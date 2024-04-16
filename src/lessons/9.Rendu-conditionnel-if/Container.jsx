export default function Container() {

  const isLogged = false;
  let content;

  if (isLogged) content = "Vous êtes connecté";
  else content = "Veuillez vous connecter";

  return <div>
    <h1>Rendu conditionnel avec if</h1>
    <p>{content}</p>
  </div>
}
