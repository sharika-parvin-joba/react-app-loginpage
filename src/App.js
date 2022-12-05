import logo from './logo.svg';
import FirstPage from './components/FirstPage/firstpage';
import SecondPage from './components/SecondPage/secondPage';
import ThirdPage from './components/ThirdPage/thirdPage';
import ForthPage from './components/ForthPage/forthPage';
import {Router,Route, BrowserRouter, Routes} from "react-router-dom"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/loginPage';

function App() {


  return (
    // <div className="App">

    // <FirstPage></FirstPage>
    // </div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FirstPage/>}></Route>
        <Route path='register1' element={<SecondPage/>}></Route>
        <Route path='/register2' element={<ThirdPage/>}></Route>
        <Route path='/register3' element={<ForthPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
      

    </Routes>
    </BrowserRouter>
  );
}
export default App;
