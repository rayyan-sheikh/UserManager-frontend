
import './App.css'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ViewUser from './components/ViewUser'

function App() {

  return (
    <>
    <Router>

      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/:id" element={<ViewUser/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
