import abilities from "../util/util";

export default function Abilities() {
  return <div className='abilities' id="abilities">
    <h1>Habilidades</h1>
    <div className='logo-container'>
      {abilities()}
    </div>
  </div>
}
