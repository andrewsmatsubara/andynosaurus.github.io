import { HashLink as Link } from 'react-router-hash-link';
import headerbackground from '../images/headerbackground.jpg'

export default function Header() {
  return <header className='header'>
    <img src={headerbackground} alt="headerbackground" />
    <ul className='navigation'>
      <li>
        <Link to='#header' className='nav-link'>Início</Link>
      </li>
      <li className='nav-link'>
        <Link to='#home' className='nav-link'>Sobre</Link>
      </li>
      <li className='nav-link'>
        <Link to='#abilities' className='nav-link'>Habilidades</Link>
      </li>
      <li className='nav-link'>
        <Link to='#contacts' className='nav-link'>Contato</Link>
      </li>
    </ul>
  </header>
}
