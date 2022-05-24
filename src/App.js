import './App.css';
import MainPage from './components/mainPage/MainPage';
import Artists from './components/atrists/Artists';
import firstImage from './resourses/img/1.png';
import secondImage from './resourses/img/2.png';

function App() {
  return (
    <div className="app">
      <img className='ring' src={firstImage} alt="ring" />
      <img className="stick" src={secondImage} alt="stick" />
      <MainPage />
      <Artists />
    </div>
  );
}

export default App;
