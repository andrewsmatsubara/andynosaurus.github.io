import headerbackground from '../images/headerbackground.jpg'

export default function Header() {
  return <header className='header'>
    <img src={ headerbackground } alt="headerbackground" />
    <ul className='navigation'>
        <li>Início</li>
        <li>Sobre</li>
        <li>Currículo</li>
        <li>Contato</li>
      </ul>
  </header>
}
