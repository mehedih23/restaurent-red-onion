import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Breakfasts from './Components/Breakfasts/Breakfasts';
import Lunches from './Components/Lunches/Lunches';
import Dinners from './Components/Dinners/Dinners';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<Breakfasts></Breakfasts>}></Route>
          <Route path='breakfasts' element={<Breakfasts></Breakfasts>}></Route>
          <Route path='lunch' element={<Lunches></Lunches>}></Route>
          <Route path='dinner' element={<Dinners></Dinners>}></Route>
        </Route>


      </Routes>

    </div>
  );
}

export default App;
