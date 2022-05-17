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
      <div className='logo-skill'>
        <img src={html} alt="html" className='logo' />
        <div className='skill-bar'>
          <div className='skill-per'></div>
        </div>
      </div>
      <div className='logo-skill'>
        <img src={css} alt="css" className='logo' />
        <div className='skill-bar'>
          <div className='skill-per'></div>
        </div>
      </div>
      <div className='logo-skill'>
        <img src={javascript} alt="javascript" className='logo' />
        <div className='skill-bar'>
          <div className='skill-per'></div>
        </div>
      </div>
      <div className='logo-skill'>
        <img src={reactLogo} alt="react" className='logo' />
        <div className='skill-bar'>
          <div className='skill-per'></div>
        </div>
      </div>
      <div className='logo-skill'>
        <img src={github} alt="github" className='logo' />
        <div className='skill-bar'>
          <div className='skill-per'></div>
        </div>
      </div>
      <div className='logo-skill'>
        <img src={docker} alt="docker" className='logo' />
        <div className='skill-bar'>
          <div className='skill-per'></div>
        </div>
      </div>
      <div className='logo-skill'>
        <img src={mysql} alt="mysql" className='logo' />
        <div className='skill-bar'>
          <div className='skill-per'></div>
        </div>
      </div>
      <div className='logo-skill'>
        <img src={nodejs} alt="nodejs" className='logo' />
        <div className='skill-bar'>
          <div className='skill-per'></div>
        </div>
      </div>
      <div className='logo-skill'>
        <img src={typescript} alt="typescript" className='logo' />
        <div className='skill-bar'>
          <div className='skill-per'></div>
        </div>
      </div>
    </div>
  </div>
}
