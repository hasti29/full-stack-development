// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        */}
        {/* Hello World  */}
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
        {/* <Home/>
        <About/>
        <Contact/> */}
      
      {/* </header> */}
    </div>
  );
}

export default App;
