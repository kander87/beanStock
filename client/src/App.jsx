
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import LoginReg from './views/LoginReg';
import Search from './views/Search'
import Favorites from './views/Favorites'
import Details from './views/Details'

function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginReg/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/stock/view/:id' element={<Details/>}/>
 {/* prob need to make the details link /:id */}

      </Routes>
    </div>
  );
}

export default App;
