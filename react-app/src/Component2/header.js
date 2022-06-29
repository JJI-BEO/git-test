import React, { Component } from "react";

class Header extends Component {
    render() {
      return (
        <header>
             <h1>애완견 종류</h1> 
            <nav>
                <ul>
                    <li><a href="#">애완견 종류</a></li>
                    <li><a href="#">입양하기</a></li>
                    <li><a href="#">건강돌보기</a></li>
                    <li><a href="#">더불어살기</a></li>
                </ul>
            </nav>
        </header>
      );
    }
  }

  export default Header;