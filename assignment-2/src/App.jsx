import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import ProjectDetails from './pages/PageDetails'




function App() {
  // we get these fragments to handle returning multiple components 

  const [theme, setTheme] = useState(localStorage.getItem("myPortfoliotheme") || 'light');


  useEffect(() => {
    localStorage.setItem("myPortfoliotheme", theme)
  }, [theme]);

  return (
    <div className={theme}>

      <Navbar themeRemoteControl={setTheme} currentTheme={theme} />

      <main>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contacts' element={<Contact />}></Route>
          <Route path='/projects/:id' element={<ProjectDetails />}></Route>
          <Route path='*' element={<h1>Error 404 page not Found!</h1>}></Route>

        </Routes>


      </main>

      <Footer />
    </div>
  );
}

export default App










