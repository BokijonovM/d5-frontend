import React from "react";

function SingleReview({ reviews }) {
  return (
    <div>
      <h4>{reviews.comment}</h4>
      <h4>{reviews.rate}</h4>
    </div>
  );
}

export default SingleReview;
