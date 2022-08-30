import './App.css';
import CharactersList from './Pages/CharactersList';
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"

function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path="/" element= {<CharactersList/>} />
    </Routes>
    </div>
  );
}

export default App;
