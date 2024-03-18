import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const SingleComment = (props) => (
  <ListGroupItem>
    {props.singleReview.rate} | {props.singleReview.comment}
  </ListGroupItem>
);

export default SingleComment;
