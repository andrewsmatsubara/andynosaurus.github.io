import html from '../images/html5.png';
import css from '../images/css-3.png';
import javascript from '../images/js.png';
import reactLogo from '../images/reactjs.png';
import github from '../images/github.png';
import docker from '../images/docker.png';
import mysql from '../images/mysql.png';
import nodejs from '../images/nodejs.png';
import typescript from '../images/typescript.png';

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

  const newArray = [];

  for (let i = 0; i < abilitiesArray.length; i += 1) {
    let imageAndBar = <div className='logo-skill'>
      <img src={abilitiesArray[i]} alt={`${abilitiesArray[i]}`} className='logo' />
      <div className='skill-bar'>
        <div className='skill-per'></div>
      </div>
    </div>

    newArray.push(imageAndBar);
  }
  return newArray;
}
