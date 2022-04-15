import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header'
import Meals from './Components/Meals/Meals';
import { Route, Routes } from 'react-router-dom';
import Breakfasts from './Components/Breakfasts/Breakfasts';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Meals></Meals>

      <Routes>
        <Route path='/breakfasts' element={<Breakfasts></Breakfasts>}></Route>
      </Routes>

    </div>
  );
}

export default App;
