import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginPage from './pages/login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/' element={<Home/>}/>

      
    </Routes>
    
      
          
     
    </>
  )
}

export default App
