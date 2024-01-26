import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import { Logout } from './pages/Logout';
import Error from './pages/Error';
import AdminLayout from './components/layouts/AdminLayouts';
import AdminUsers from  "./pages/AdminUsers";
 import AdminContact from './pages/AdminContacts'; // Import the AdminContact component

function App() {
  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/Service' element={<Service />}></Route>
          <Route path="/logout" element={<Logout />} />
          <Route path='*' element={<Error />}></Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contact" element={<AdminContact />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
