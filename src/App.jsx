import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './Pages/Home'
import Lesson from './Pages/Lesson'
import Manual from './Pages/Manual'
import Profile from './Pages/Profile'
import Quiz from './Pages/Quiz'

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lessons/IT1' element={<Lesson id={1} />} />
        <Route path='/lessons/IT2' element={<Lesson id={2} />} />
        <Route path='/lessons/IT3' element={<Lesson id={3} />} />
        <Route path='/lessons/IT4' element={<Lesson id={4} />} />
        <Route path='/quiz/IT1' element={<Quiz id={1} />} />
        <Route path='/quiz/IT2' element={<Quiz id={2} />} />
        <Route path='/quiz/IT3' element={<Quiz id={3} />} />
        <Route path='/quiz/IT4' element={<Quiz id={4} />} />
        <Route path='/quiz/rev' element={<Quiz id={'rev'} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/guide' element={<Manual />} />
      </Routes>
    </>
  )
}

export default App
