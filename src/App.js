import Navbar from './Navbar.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import './App.css';
import { useState } from 'react';
import Introduction from './Introduction.js';
import About from './About.js'
import Project from './Project.js';
import Extras from './Extras.js';
import Numberinc from './Numberinc.js';
import Contact from './Contact.js';
import {useRef} from 'react';

function App() {
  const aboutRef = useRef(null);
  const [darkMode , setdarkMode] = useState(true);
  const theme = createTheme(
    {
      palette : {
        mode : darkMode?"dark" : "light"
      }
    }
  )
  return (
    <ThemeProvider theme={theme}>
      <Paper > 
        <div className="App">
          <Navbar aboutRef ={aboutRef} check={darkMode} change={()=>setdarkMode(!darkMode)} />
          <br/>
          <Introduction/>
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <Project/>
        <Extras/>
        <Numberinc/>
        <Contact/>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
