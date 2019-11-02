import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentBox = (props) => (
  <div className="container">
    <h1>Comentarios</h1>
    <CommentList data={props.data} />
    <CommentForm />
  </div>
);

export default CommentBox;
