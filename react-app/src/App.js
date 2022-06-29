// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Toc from "./Component/TOC";
import Subject from "./Component/Subject";
import Content from "./Component/Content";

// import Header from "./Component2/header";
// import Section from "./Component2/section";
// import Aside from "./Component2/aside";
// import Footer from "./Component2/footer";

// class App extends Component {
  // render() {
  //   return (
  //     <>
  //       <Subject title="Web" sub="world wide Web!" /> {/* 속성이름 마음대로 */}
  //       <Toc/>
  //       <Content title="HTML" desc="HTML is HyperText Markup Language" />  
  //     </>
  //   ); 
  // }
// }

  //주석추가1
  // class App extends Component{
    // render(){
    //   return (
    //     <div id="wrapper">
    //     <Header/>
    //     <Section/>
    //     <Aside/>
    //     <Footer/>
    //     </div>
  //     )
  //   }
  // }

  class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        subject:{title:'WEB', sub:'World wid Web'},
        contents:[
          {id:1, title:'HTML',desc:'HTML is info'},
          {id:2, title:'CSS',desc:'Css is info'},
          {id:3, title:'JAVA',desc:'java is info'}
        ]
      }
    }
    render() {
      return (
        <>
          {/* <Subject title="Web" sub="world wide Web!" /> 속성이름 마음대로 */}
          <Subject title={this.state.subject.title} sub={this.state.subject.sub}/>
          <Toc data={this.state.contents} />
          <Content title="HTML" desc="HTML is HyperText Markup Language" />  
        </>
      ); 
    }
  }

export default App;

