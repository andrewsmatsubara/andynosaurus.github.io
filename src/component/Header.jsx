import { Scrollchor } from 'react-scrollchor';
import headerbackground from '../images/headerbackground.jpg'

export default function Header() {
  return <header className='header'>
    <img src={headerbackground} alt="headerbackground" />
    <ul className='navigation'>
      <li>
        <Scrollchor to='#header'>Início</Scrollchor>
      </li>
      <li>
        <Scrollchor to='#home'>Sobre</Scrollchor>
      </li>
      <li>
        <Scrollchor to='#abilities'>Habilidades</Scrollchor>
      </li>
      <li>
        <Scrollchor to='#contacts'>Contato</Scrollchor>
      </li>
    </ul>
  </header>
}
