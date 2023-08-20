import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App