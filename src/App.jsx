
import { Outlet } from 'react-router-dom'
import './App.css'
import bgimage from "../public/images/bi.jpg"
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <section className='border border-green-900 ' style={{ backgroundImage: `url(${bgimage})`, backgroundAttachment: "fixed", backgroundPosition: "center" }}>
      <div className='bg-opacity-20 hero-overlay h-full border border-black'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      </div>
    </section>
  )
}

export default App
