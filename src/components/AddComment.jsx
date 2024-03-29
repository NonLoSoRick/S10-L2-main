import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddComment = ({ bookId, aggiornaCommenti }) => {
  const [commentObject, setCommentObject] = useState({
    comment: '',
    rate: '1',
    elementId: bookId,
  });

  const sendNewReview = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          headers: {
            Authorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYWI5MTRjNTllYzAwMTk5MGQ3NTgiLCJpYXQiOjE3MTA3NzYwOTQsImV4cCI6MTcxMTk4NTY5NH0.i_MjGch2_oz1ihyzpuiLbUilYikCLGQJy7kHyDnywik",
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentObject),
        }
      );
      if (response.ok) {
        alert('Commento salvato!');
        aggiornaCommenti();
      } else {
        throw new Error('Errore nel salvataggio del commento');
      }
    } catch (error) {
      console.log('Errore', error);
    }
  };

  return (
    <Form onSubmit={sendNewReview}>
      <Form.Group className="mb-1 mt-4">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          type="text"
          value={commentObject.comment}
          onChange={(e) =>
            setCommentObject({
              ...commentObject,
              comment: e.target.value,
            })
          }
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Select
          aria-label="comment rating"
          value={commentObject.rate}
          onChange={(e) =>
            setCommentObject({
              ...commentObject,
              rate: e.target.value,
            })
          }
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;
