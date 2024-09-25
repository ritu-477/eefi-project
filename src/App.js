
import './App.css';
import Header from './common/Header';
import Amplify from './components/Amplify';
import GameTheory from './components/GameTheory';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className='overflow-hidden relative mx-auto max-w-[1920px]'>
      <Header />
      <Hero />
      <Amplify />
      <Roadmap />
      <GameTheory />
    </div>
  );
}

export default App;
