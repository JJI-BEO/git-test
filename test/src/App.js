// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Insert from './Componenet/Insert';
import Home from './Componenet/home';
import Control from './Componenet/Control';
import Update from './Componenet/Update';

class App extends Component {
  constructor(props)
{
  super(props)


  this.state = {
    mode: "Home",
    selectNo: 0,
    info:[
    {}    
      // id, pass, email, number
    ]
  }


}

getContent(){
  let _article = null;
    
    if(this.state.mode === 'insert'){
      _article = <Insert />

    }else if(this.state.mode === 'update'){
      _article = <Update />
    }
    

  return _article;
}

  render() {
    // 함수 자리?
    return (
      <>
      {/* <Home></Home> */}

      {/* // 버튼 모여있는 컴포넌트 */}
      <Control
        onChangeMode={function(_mode){
          this.setState({  //this.setState()
            mode: _mode
            
          
            //컴포넌트일떄  
          })
        }.bind(this)}
      />
        
      {/* // 컨텐츠 보이는 컴포넌트 */}
      {this.getContent()}
     

      </>
    );
  }

}

export default App;
