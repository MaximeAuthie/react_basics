import "./Container.css";
export default function Container() {

  const txtColor = "crimson";
  const bgColor="#333";

  return (
    <div>
      <h1 style={{color:txtColor, backgroundColor:bgColor}}>Utiliser du CSS</h1>

      <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur sunt aperiam, eveniet beatae nulla blanditiis! Totam, magni consectetur sed est laboriosam optio voluptatum veritatis hic natus, ut doloremque molestiae.</p>
    </div>
  )
}
