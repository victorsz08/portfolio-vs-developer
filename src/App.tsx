import About from './Components/About'
import Contact from './Components/Contact'
import Experiencies from './Components/Experiencies'
import Footer from './Components/Footer'
import HardSkill from './Components/HardSkills'
import Home from './Components/Home'
import Layout from './Components/Layout'
import "./index.css"

function App() {
  return (
    <Layout>
      <Home/>
      <About/>
      <HardSkill/>
      <Experiencies/>
      <Contact/>
      <Footer/>
    </Layout>
  )
}

export default App
