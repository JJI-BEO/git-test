import React, { Component } from "react";

class Toc extends Component {
  render() {
    console.log("Toc render");

    let lists = [];
    let data = this.props.data;
    let i = 0;

    while (i < data.length) {
      lists.push(<li key={data[i].id}>

         <a
        href={"/content/" + data[i].id}
        data-id={data[i].id}
        onClick={function (e) {
          e.preventDefault();
          this.props.onChangePage(e.target.dataset.id); // 온클릭되는 요소의 데이터셋 id 값 
        }.bind(this)}
      >
        {data[i].title}
      </a>

      </li>);
      i = i + 1;
    }

      return (

        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
 
        // <nav>
        //   <ul>
        //     <li>
        //       <a href="1.html">HTML</a>
        //     </li>
        //     <li>
        //       <a href="2.html">CSS</a>
        //     </li>
        //     <li>
        //       <a href="3.html">JavaScript</a>
        //     </li>
        //   </ul>
        // </nav>
      );
    }
  }

  export default Toc;