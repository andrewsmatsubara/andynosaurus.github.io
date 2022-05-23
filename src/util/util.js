import html from '../images/html5.png';
import css from '../images/css-3.png';
import javascript from '../images/js.png';
import reactLogo from '../images/reactjs.png';
import github from '../images/github.png';
import docker from '../images/docker.png';
import mysql from '../images/mysql.png';
import nodejs from '../images/nodejs.png';
import typescript from '../images/typescript.png';
import gmail from '../images/gmail.png';
import linkedin from '../images/linkedin.png';
import whatsapp from '../images/whatsapp.png';

export default function abilities() {
  const abilitiesArray = [
    html,
    css,
    javascript,
    reactLogo,
    github,
    docker,
    mysql,
    nodejs,
    typescript
  ];

  const abilitiesStringArray = [
    'html',
    'css',
    'javascript',
    'reactLogo',
    'github',
    'docker',
    'mysql',
    'nodejs',
    'typescript'
  ];

  const newArray = [];

  for (let i = 0; i < abilitiesArray.length; i += 1) {
    const imageAndBar = <div className='logo-skill'>
      <img src={abilitiesArray[i]} alt={`${abilitiesStringArray[i]}`} className='logo' />
      <div className='skill-bar'>
        <div className={`${abilitiesStringArray[i]}-skill-per`} style={{ backgroundColor: 'lightcoral', borderRadius: '1000px', height: '15px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
          <div className='per-number'></div>
        </div>
      </div>
    </div>

    newArray.push(imageAndBar);
  }

  return newArray;
}

export function contacts() {
  const contactArray = [
    gmail,
    whatsapp,
    linkedin,
    github
  ];

  const contactStringArray = [
    'Gmail',
    'Whatsapp',
    'Linkedin',
    'Github'
  ];

  const newArray = [];

  for (let i = 0; i < contactArray.length; i += 1) {
    const imageAndName = <div className='contact-container'>
      <img src={contactArray[i]} alt={`${contactStringArray[i]}`} className='logo' />
      <h2>{contactStringArray[i]}</h2>
    </div>

    newArray.push(imageAndName);
  }

  return newArray;
}
