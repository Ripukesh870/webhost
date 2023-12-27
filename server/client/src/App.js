import './App.css';

import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import ErrorPage from './component/ErrorPage';
import {Routes,Route} from 'react-router-dom'
import Logout from './component/Logout';
import { createContext, useReducer } from 'react';
import { initialState,reducer } from './reducer/UseReducer';

export const UserContext =createContext();

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <Navbar/>
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
  )
}