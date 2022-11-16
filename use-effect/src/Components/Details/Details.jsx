import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

function Details({ id }) {
  const [currentUserCard, setCurrentUserCard] = useState(null);

  useEffect(() => {
    setCurrentUserCard(null);
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentUserCard(data);
        console.log(data);
      });
  }, [id]);
  return (
    <>
      {currentUserCard === null ? (
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`${currentUserCard.avatar}?name=${currentUserCard.name}`}
            alt={currentUserCard.name}
          />
          <Card.Body>
            <Card.Title>{currentUserCard.name}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
                City: {currentUserCard.details.city}
              </ListGroup.Item>
              <ListGroup.Item>
                Company: {currentUserCard.details.company}
              </ListGroup.Item>
              <ListGroup.Item>
                Position: {currentUserCard.details.position}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Details;
