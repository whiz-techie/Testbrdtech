
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
// import Carousel from './components/Carousel';
import Cards from './components/Sections/Cards';
import Footer from './components/Footer';
import Timeline from './components/Sections/Timeline';
import Home  from './components/Home';
import About from './components/About';
// import { Contact } from './Contact';
import {
  Routes,
  Route
} from "react-router-dom";
import Team from './components/Sections/team';
import Contactus from './components/Contactus';
import Services from './components/Services';
import Swap from './components/Swap';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/team' element={<Team/>}/>
<Route path='/contact' element={<Contactus/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/swap' element={<Swap/>}/>
  </Routes>
   
      <Footer/>
    </div>
  );
}

export default App;
