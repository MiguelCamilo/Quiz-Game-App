import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Quiz from './components/Quiz/Quiz'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import './App.css'

function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='signup' element={<SignUp />}/>
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
