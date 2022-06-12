import './App.css'
import './components/components.css'
import { GameBoard2 } from './components/GameBoard2';
import GameBoard from './components/GameBoard';
import PlayerSelection from './components/PlayerSelection';
import image from './tictactoepngicon.png'

function App() {
  return (
    <div className="App">
      <div className='heading'>Tic Tac Toe <img src={image} alt='logo' length={40} width={40}/></div>
      <GameBoard2 />
      {/* <PlayerSelection /> */}
    </div>
    
  );
}

export default App;
