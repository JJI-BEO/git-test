import React, { Component } from "react";


//주석
class Crud extends Component {
    render() {
        return (
            <>
                <ul>
                    <li>
                        <a href="/reate"
                            onClick={function (e) {
                                e.preventDefault();
                                this.props.onChangeMode('create');
                            }.bind(this)}
                        >
                            create
                        </a>
                    </li>

                    <li>
                        <a href="/update"
                            onClick={function (e) {
                                e.preventDefault();
                                this.props.onChangeMode('update');
                            }.bind(this)}
                        >
                            update
                        </a>
                    </li>


                    {/* <li><a href="/update">create</a></li> */}
                    <li>
                        <input type="button"
                            value="delete"
                            onClick={function (e) {
                                e.preventDefault();
                                this.props.onChangeMode('delete');
                            }.bind(this)}
                        >
                        </input>
                    </li>
                </ul>
            </>
        );
    }
}

  export default Crud;