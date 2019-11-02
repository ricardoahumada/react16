import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentBox = () => (
  <div className="container">
    <h1>Comentarios</h1>
    <CommentList />
    <CommentForm />
  </div>
);

export default CommentBox;
