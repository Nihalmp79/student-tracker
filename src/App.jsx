
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Student from './pages/Student'
import Home from './pages/Home'
import About from './pages/About'
import StudentDetails from './pages/StudentDetails'

const App = () => {

  

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/students' element={<Student/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/students/:id' element={<StudentDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
