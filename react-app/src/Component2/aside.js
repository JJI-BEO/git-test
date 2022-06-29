import React, { Component } from "react";
import c1 from '../img/c1.png';
import c2 from '../img/c2.png';
import c3 from '../img/c3.png';

class Aside extends Component {
    render() {
      return (
        <>
        <img src={c1} alt="강아지"/>
        <img src={c2} alt="강아지"/>
        <img src={c3} alt="강아지"/>
        </>
      );
    }
  }

  export default Aside;