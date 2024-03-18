import React, { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (bookId) {
      getComments();
    }
  }, [bookId]);

  const getComments = () => {
    // Fetch comments logic remains unchanged
  };

  const aggiornaCommenti = () => {
    getComments();
  };

  return (
    <div>
      <div>
        <CommentsList reviews={comments} />
      </div>
      <div>
        <AddComment bookId={bookId} aggiornaCommenti={aggiornaCommenti} />
      </div>
    </div>
  );
};

export default CommentArea;
