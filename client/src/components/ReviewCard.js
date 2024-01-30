import React from 'react';
import '../index.css'

const RecipeReviewCard = ({ reviews }) => {
  return (
    <div>
      <h2>Recipe Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <p>Email: {review.userEmail}</p>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeReviewCard;