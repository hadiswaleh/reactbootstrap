import React from 'react'
import "./assets/styles.css"
import "./assets/custom.css"
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Pricing from "./components/pages/Pricing";
import Faqs from "./components/pages/Faqs";
import DarkMode from "./components/inc/DarkMode"
import Portfolio from "./components/pages/Portfolio";
import Portfoliodetail from "./components/pages/Portfoliodetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <>  
      <Router>   
        <div className="container px-5">
          <div className="row">
            <div className="col-xxl-12 py-1">
            <DarkMode />
            </div></div></div>           
        <Navbar />    
        <Switch >
          <Route exact path="/home"><Home /></Route>  
          <Route exact path="/about"><About /></Route> 
          <Route exact path="/portfolio"><Portfolio/></Route>   
          <Route exact path="/contact"><Contact/></Route>    
          <Route exact path="/pricing"><Pricing/></Route>  
          <Route exact path="/faqs"><Faqs/></Route> 
          <Route exact path="/portfoliodetail"><Portfoliodetail/></Route>    
        </Switch>  
    </Router>
    </>
  )
}
export default App
