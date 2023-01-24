import logo from './logo.svg';
import './App.css';
import { Navbar } from './navbar/navbar';
import { Routing } from './Allroutes/routes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routing/>
    </div>
  );
}

export default App;
