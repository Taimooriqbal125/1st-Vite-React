import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Cards from './Components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <Navbar/>
       <div className='cards'>
      <Cards className='cards' title = "Card 1" description = "1"/>
      <Cards title = "Card 2" description = "2"/>
      <Cards title = "Card 3" description = "3"/>
    </div>
       <Footer/>
      
  
    </>
  )
}

export default App
