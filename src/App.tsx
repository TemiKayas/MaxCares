import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';
import './index.css';
import Services from "./Components/Services.tsx";
import Footer from "./Components/Footer.tsx";


function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
