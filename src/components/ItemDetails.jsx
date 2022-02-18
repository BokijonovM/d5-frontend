import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SingleReview from "./SingleReview";

function ItemDetails() {
  const [itemData, setItemData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        let res = await fetch(
          "https://m6-benchmark.herokuapp.com/product/" + params.productId
        );
        if (res.ok) {
          let data = await res.json();
          console.log("hi");
          setItemData(data);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchReview = async () => {
      try {
        let response = await fetch(
          `https://m6-benchmark.herokuapp.com/product/${params.productId}/review`
        );
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setReviews(data);
          setIsLoading(false);
        } else {
          console.log("Fetch failed!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchReview();
    fetchSingleData();
  }, []);
  return (
    <div className="my-5 ml-5 d-flex">
      <Card className="mr-5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={itemData.imageUrl} />
        <Card.Body>
          <Card.Title>{itemData.name}</Card.Title>
          <Card.Text>{itemData.description}</Card.Text>
          <Card.Text>{itemData.price}</Card.Text>
        </Card.Body>
      </Card>
      <div style={{ marginLeft: "100px" }}>
        {isLoading ? (
          <h6>No comment</h6>
        ) : (
          reviews.map(review => {
            return <SingleReview key={review.id} reviews={review} />;
          })
        )}
      </div>
    </div>
  );
}

export default ItemDetails;
