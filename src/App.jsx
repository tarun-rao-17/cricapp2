import React, { useEffect } from 'react'
import Login from './components/Login/Login'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Home from './components/Home/Home'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'


const App = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("logged in");
        navigate('/');

      }else{
        console.log("logged out")
        navigate('/login');

      }

    })

  },[])
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      
        <Route path='/login' element={<Login/>}/>

      </Routes>
      <About/>
      <Services/>
      <div className="container">
      <Title subtitle='Contact US' title='Get in Touch' />
        <Contact/>
        <Footer/>


      </div>
      
    </div>
  )
}

export default App
