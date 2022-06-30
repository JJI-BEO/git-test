import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        return (
            <article class="content">
                <h2>Create</h2>
                <form
                    action="/create_process"
                    method="post"
                    onSubmit={function (e) {
                        e.preventDefault();
                        alert("submit");
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

export default CreateContent;
