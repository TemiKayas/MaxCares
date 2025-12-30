import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Components/Footer';
import { Box } from '@mui/material';
import backgroundImage from '/src/assets/background.png';
import './App.css';
import './index.css';

function App() {
    return (
        <Router>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    height: '100%',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center center',
                    overflow: 'hidden',
                    overflowY: 'auto',
                    '@media (min-width: 1920px)': {
                        backgroundSize: '100% 100%'
                    }
                }}
            >
                <Nav />
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        overflow: 'visible'
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </Router>
    );
}

export default App;