import html from '../images/html5.png';
import css from '../images/css-3.png';
import javascript from '../images/js.png';
import reactLogo from '../images/reactjs.png';
import github from '../images/github.png';
import docker from '../images/docker.png';
import mysql from '../images/mysql.png';
import nodejs from '../images/nodejs.png';
import typescript from '../images/typescript.png';

export default function Resume() {
  return <div className='abilities'>
    <h1>Habilidades</h1>
    <div className='logo-container'>
      <img src={html} alt="html" className='logo' />
      <img src={css} alt="css" className='logo' />
      <img src={javascript} alt="javascript" className='logo' />
      <img src={reactLogo} alt="react" className='logo' />
      <img src={github} alt="github" className='logo' />
      <img src={docker} alt="docker" className='logo' />
      <img src={mysql} alt="mysql" className='logo' />
      <img src={nodejs} alt="nodejs" className='logo' />
      <img src={typescript} alt="typescript" className='logo' />
    </div>
  </div>
}
