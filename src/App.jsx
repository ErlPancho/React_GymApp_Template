import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { Home } from './Pages/Home'
import { Products } from './Pages/Products'
import { Contact } from './Pages/Contact'
import { About } from './Pages/About'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element={<About/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
