import React, { Component } from "react";

// class Subject extends Component {
//     render() {
//       console.log("Subject render");
//       return (
//         <header>
//           <h1><a href="#">{this.props.title}</a></h1>
//           {this.props.sub}
//         </header>
//       );
//     }
//   }
 

// class Subject extends Component {
//   render() {
//     console.log("Subject render");
//     return (
//       <header>
//         <h1>
//           <a href="/" onClick={function (e) {
//             e.preventDefault()
//             this.setState({ mode: "welcome" });
//           }.bind(this)}>{this.state.subject.title}</a>
//         </h1>
//         {this.state.subject.desc}
//       </header>
//     );
//   }
// }

class Subject extends Component {
  render() {
    console.log("Subject render");
    return (
      <header>
        <h1><a href="#1" 
        onClick={function(e){
        e.preventDefault();
        this.props.onChangePage();  
      }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

  
 
  export default Subject;