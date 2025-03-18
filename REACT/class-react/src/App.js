import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header"
import About from "./components/About";

class Layout extends Component {
  render(){
    return(
      <>
      <Header/>
      <Outlet/>
      </>
    )
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/about" element={<About/>} />         
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
