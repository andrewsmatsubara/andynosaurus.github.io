import '../src/css/App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import background from '../src/images/home-background.jpg'
import Resume from './component/Curriculo';
import Credits from './component/Credits';

function App() {
  return (
    <div className='body'>
      <Header/>
    <img src={background} alt="background" className='bg'/>
      <Home/>
      <Resume/>
      <Credits/>
      <Footer/>
    </div>
  );
}

export default App;
