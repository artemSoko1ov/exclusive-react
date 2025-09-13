import './Content.scss'
import { Routes, Route} from "react-router-dom"
import Home from "@/pages/Home.jsx"
import Contact from "@/pages/Contact.jsx"
import About from "@/pages/About.jsx"
import SignUp from "@/pages/SignUp.jsx"

const Content = (props) => {
  const {} = props
  return (
    <main className='content container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    </main>
  )
}

export default Content