// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
// import Toc from "./Component/TOC";
// import Subject from "./Component/Subject";
// import Content from "./Component/Content";

import Header from "./Component2/header";
import Section from "./Component2/section";
import Aside from "./Component2/aside";
import Footer from "./Component2/footer";

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Subject title="Web" sub="world wide Web!" /> {/* 속성이름 마음대로 */}
//         <Toc/>
//         <Content title="HTML" desc="HTML is HyperText Markup Language" />  
//       </>
//     ); 
//   }
// }

  class App extends Component{
    render(){
      return (
        <div id="wrapper">
        <Header/>
        <Section/>
        <Aside/>
        <Footer/>
        </div>
      )
    }
  }

export default App;