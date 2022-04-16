import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Breakfasts from './Components/Breakfasts/Breakfasts';
import Lunches from './Components/Lunches/Lunches';
import Dinners from './Components/Dinners/Dinners';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<Breakfasts></Breakfasts>}></Route>
          <Route path='breakfasts' element={<Breakfasts></Breakfasts>}></Route>
          <Route path='lunch' element={<Lunches></Lunches>}></Route>
          <Route path='dinner' element={<Dinners></Dinners>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>


      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
