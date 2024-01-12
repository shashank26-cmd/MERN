
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Service from './pages/Service'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
<Navbar />
    <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/About' element={<About/>}></Route>

<Route path='/Contact' element={<Contact/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/Service' element={<Service/>}></Route>




    </Routes>

    </>
  )
}

export default App
