import abilities from "../util/util";

export default function Resume() {
  return <div className='abilities'>
    <h1>Habilidades</h1>
    <div className='logo-container'>
      {abilities()}
    </div>
  </div>
}
