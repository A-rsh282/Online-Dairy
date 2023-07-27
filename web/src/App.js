import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Features from "./pages/Features";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
 <Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Services" element={<Services/>}></Route>
    <Route path="/Products" element={<Products/>}></Route>
    <Route path="/Gallery" element={<Gallery/>}></Route>
    <Route path="/Features" element={<Features/>}></Route>
    <Route path="/Team" element={<Team/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
  </Routes>
  <Footer/>
 </Router>
    </>
  );
}

export default App;
