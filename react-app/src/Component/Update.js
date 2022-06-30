import React, { Component } from 'react';


class Update extends Component {
    render() {
        console.log("Update render");
        return (
            <article>
                <h2>Create</h2>
                <form
                    action="/create_process"
                    method="post"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(e.target.title.value,e.target.desc.value);
                    }.bind(this)}
                >
                    <p>
                        <input type="text" name="title" placeholde="title"></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}

export default Update;