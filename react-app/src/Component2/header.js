import React, { Component } from "react";

// class Header extends Component {
//     render() {
//       return (
//         <header>
//              <h1>애완견 종류</h1> 
//             <nav>
//                 <ul>
//                     <li><a href="#1">애완견 종류</a></li>
//                     <li><a href="#2">입양하기</a></li>
//                     <li><a href="#3">건강돌보기</a></li>
//                     <li><a href="#4">더불어살기</a></li>
//                 </ul>
//             </nav>
//         </header>
//       );
//     }
//   }


class Header extends Component {
  render() {
    let list = [];
    let data = this.props.data;
    let i = 0;

    while(i < data.length){
      list.push
      (<li key={data[i].no}>
        <a href={"#" + data[i].no}>
        {data[i].desc}
        </a>
      </li>)
      i = i + 1;
    }
    return (
      <header>
           <h1>애완견 종류</h1> 
          <nav>
              <ul>
                {list}
                  {/* <li><a href="#">애완견 종류</a></li>
                  <li><a href="#">입양하기</a></li>
                  <li><a href="#">건강돌보기</a></li>
                  <li><a href="#">더불어살기</a></li> */}
              </ul>
          </nav>
      </header>
    );
  }
}

  export default Header; 