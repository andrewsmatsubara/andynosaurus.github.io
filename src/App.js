import '../src/css/App.css';
import '../src/css/Header.css';
import '../src/css/Home.css';
import '../src/css/Abilities.css';
import '../src/css/Credits.css';
import '../src/css/Footer.css';

import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import background from '../src/images/home-background.jpg'
import Abilities from './component/Abilities';
import Credits from './component/Credits';

function App() {
  return (
    <div className='body'>
      <Header />
      <img src={background} alt="background" className='bg' />
      <Home />
      <hr className='hr' />
      <Abilities />
      <hr className='hr' />
      <Credits />
      <Footer />
    </div>
  );
}

export default App;
