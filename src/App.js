// import './App.css';
// import Navbar from './components/navbar';
// import Textbox from './components/textbox';
// import { useState } from 'react';
// function App() {
//   const[style,setStyle]=useState(false)
//   return (
//     <><Navbar style={style}/>
//     <Textbox heading="Enter your text here!" submit_button1="Convert to Uppercase" submit_button2="Convert to Lowercase"/>
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Textbox from './components/textbox';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  let div_style=darkMode?{backgroundColor:"black"}:{}
  return (
    <>
    <div style={div_style}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Textbox heading="Enter your text here!" submit_button1="Convert to Uppercase" submit_button2="Convert to Lowercase" darkMode={darkMode} />
      </div>
      
    </>
  );
}

export default App;
