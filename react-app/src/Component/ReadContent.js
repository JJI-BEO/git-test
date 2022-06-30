import React, { Component } from 'react';


class ReadContent extends Component {
    render() {
        console.log('ReadContent render run')
        return (
            <article class="content">
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        )
    };
}

export default ReadContent;