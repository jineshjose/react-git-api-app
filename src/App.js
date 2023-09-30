import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Main from "./components/Main";
import About from "./pages/About";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <div className='container vh-100'>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element = {
            <>
              <Home/>
            </>
          } />
          
          
          <Route path="/about" element = {<About/>} />

          
        </Routes>
        <Footer/>
      </Router>
      
      </div>
    </div>
  );
}

export default App;
