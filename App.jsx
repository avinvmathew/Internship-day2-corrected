import { useState } from 'react'
import './App.css'
import View from './components/View'
import Records from './components/Records'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'

function App() 
{
  const [count , setCount] = useState(0)
  
  return (
    <>
      <h1>Welcome to SOLARIS</h1>
      <p></p>
      <View/>

      <Routes>
      <Route path='/' element={<Records/>}></Route>
      <Route path='/add' element={<Add person={{fname:"John",middlename:"Titus",lastname:"Stone"}}/>}></Route>
      </Routes>
    </>
  )
}

export default App









