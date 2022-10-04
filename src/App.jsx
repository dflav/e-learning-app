import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './Pages/Home'
import Lesson from './Pages/Lesson'
import Manual from './Pages/Manual'
import Profile from './Pages/Profile'
import Exam from './Pages/Exam'

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/e-learning-app' element={<Home />} />
        <Route path='/e-learning-app/lessons/IT1' element={<Lesson id={1} />} />
        <Route path='/e-learning-app/lessons/IT2' element={<Lesson id={2} />} />
        <Route path='/e-learning-app/lessons/IT3' element={<Lesson id={3} />} />
        <Route path='/e-learning-app/lessons/IT4' element={<Lesson id={4} />} />
        <Route path='/e-learning-app/quiz/IT1' element={<Exam id={1} />} />
        <Route path='/e-learning-app/quiz/IT2' element={<Exam id={2} />} />
        <Route path='/e-learning-app/quiz/IT3' element={<Exam id={3} />} />
        <Route path='/e-learning-app/quiz/IT4' element={<Exam id={4} />} />
        <Route path='/e-learning-app/quiz/rev' element={<Exam id={5} />} />
        <Route path='/e-learning-app/profile' element={<Profile />} />
        <Route path='/e-learning-app/guide' element={<Manual />} />
      </Routes>
    </>
  )
}

export default App
