import React from 'react'
import Layout from './Layout/Layout'
import DetailProduct from './pages/Detail/DetailProduct'
import NotesAlert from './components/notesAlert/NotesAlert'
import { useSelector } from 'react-redux'


const App = () => {
  const isVisible = useSelector(  state =>  state.alert.isVisible)
  return (
    <div>
      <Layout/>
      {isVisible &&  <NotesAlert/>}
      
    </div>
  )
}

export default App