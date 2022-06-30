// import logo from "./logo.svg";
import "./App.css";
// import "./App2.css";

import React, { Component } from "react";
import Toc from "./Component/TOC";
import Subject from "./Component/Subject";
import ReadContent from "./Component/ReadContent";
import Crud from "./Component/crud";
import CreateContent from "./Component/CreateContent";
import Update from "./Component/Update";

// import Header from "./Component2/header";
// import Section from "./Component2/section";
// import Aside from "./Component2/aside";
// import Footer from "./Component2/footer";

// class App extends Component{
//   render(){
//     return (
//       <div id="wrapper">
//       <Header/>
//       <Section/>
//       <Aside/>
//       <Footer/>
//       </div>
//     )
//   }
// }

// class App2 extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       header:[
//         {no:1, desc:"애완견 종류"},
//         {no:2, desc:"애완견 종류"},
//         {no:3, desc:"애완견 종류"},
//         {no:4, desc:"애완견 종류"}
//       ]
//     }
//   }
//   render(){
//     return (
//       <div id="wrapper">
//       {/* <Header data={this.state.header}/> */}
//       <Header/>
//       <Section/>
//       <Aside/>
//       <Footer/>
//       </div>
//     )
//   }
// }



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

  class App extends Component{
    constructor(props){
      super(props);
      this.max_content_id = 3;
      this.state = {
        mode:"read",
        selected_content_id : 0,
        subject:{title:'WEB', sub:'World wid Web'},
        welcome:{title:"welcome", desc:"hello"},
        contents:[
          {id:1, title:'HTML',desc:'HTML is info'},
          {id:2, title:'CSS',desc:'Css is info'},
          {id:3, title:'JAVA',desc:'java is info'}
        ]
      }
    }
    render() {
      console.log("app render");
      let _title, _desc, _article = null;
      if(this.state.mode === "welcome"){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
      }else if(this.state.mode === "read"){
        // _title = this.state.contents[0].title;
        // _desc = this.state.contents[0].desc;

        let i=0;
        while(i < this.state.contents.length){
          let data = this.state.contents[i];
          if(data.id === this.state.selected_content_id){
            _title = data.title;
            _desc = data.desc;
            
            break;
          }
          i = i+1;
        }
        _article = <ReadContent title={_title} desc={_desc} /> 
        
      }else if(this.state.mode ==='create'){
        _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;
        this.state.contents.push(
          {id:this.max_content_id, title:_title,desc:_desc}
        );
        // let _concat = this.state.contents.concat(
        //         {id:this.max_content_id, title:_title,desc:_desc}
        // );
        
        this.setState({
          contents : this.state.contents
          //  contents : _concat 
        });
      }.bind(this)}
        />
      }
      return (
        <>


          {/* <Subject title="Web" sub="world wide Web!" /> 속성이름 마음대로 */}
          <Subject title={this.state.subject.title} sub={this.state.subject.sub}
           onChangePage={function(){
            this.setState({mode:"welcome"});
           }.bind(this)}/>
          {/* <subject/> */}



          <Toc data={this.state.contents}
          onChangePage={function(id){
            // this.setState({mode:'read'});
            this.setState(
              {
                mode:'read',
                selected_content_id :Number(id)
              });
           }.bind(this)} 
           
           />
          
            <Crud onChangeMode={function(_mode){
            
              this.setState({
                mode:_mode
              })
            }.bind(this)}
            />
          
      
          {/* <Content title="HTML" desc="HTML is HyperText Markup Language" />   */}
          {_article}
          <Update />
        </>
      ); 
    }
  }

export default App;

