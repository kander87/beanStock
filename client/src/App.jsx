
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import LoginReg from './views/LoginReg';
import Top25 from './views/Top25'
import Favorites from './views/Favorites'
import Details from './views/Details'
import Search from './views/Search'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginReg/>}/>
        <Route path='/top25' element={<Top25/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/stock/view/:id' element={<Details/>}/>
 {/* prob need to make the details link /:id */}

      </Routes>
    </div>
  );
}

export default App;
