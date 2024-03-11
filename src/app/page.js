import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import './App.css'
import ThemeToggle from './components/toggles/ThemeToggle'
import ScrollUpToggle from './components/toggles/ScrollUpToggle'

function App() {

  return (
    <>
      <ThemeToggle />
      <ScrollUpToggle/>
      <Sidebar></Sidebar>
      <div className="main">
        <Home></Home>
        <About></About>
        <Services></Services>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Blog></Blog>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
