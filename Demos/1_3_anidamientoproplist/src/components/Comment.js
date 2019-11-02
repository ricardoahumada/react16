import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (<div className="comment">
            <hr />
            <h2 className="commentAuthor">
                {this.props.author}
            </h2>
            <p>{this.props.children}</p>
        </div>);
    }
}


export default Comment;