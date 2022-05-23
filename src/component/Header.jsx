import { Scrollchor } from 'react-scrollchor';
import headerbackground from '../images/headerbackground.jpg'

export default function Header() {
  return <header className='header'>
    <img src={headerbackground} alt="headerbackground" />
    <ul className='navigation'>
      <li>
        <Scrollchor to='#header' className='nav-link'>Início</Scrollchor>
      </li>
      <li className='nav-link'>
        <Scrollchor to='#home' className='nav-link'>Sobre</Scrollchor>
      </li>
      <li className='nav-link'>
        <Scrollchor to='#abilities' className='nav-link'>Habilidades</Scrollchor>
      </li>
      <li className='nav-link'>
        <Scrollchor to='#contacts' className='nav-link'>Contato</Scrollchor>
      </li>
    </ul>
  </header>
}

// https://www.npmjs.com/package/react-scrollchor
