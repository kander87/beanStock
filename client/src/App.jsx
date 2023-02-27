
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Search from './views/Search'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>

      </Routes>
    </div>
  );
}

export default App;
