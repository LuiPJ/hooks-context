import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function List({ users, currentUser }) {
  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroup.Item
          action
          onClick={() => currentUser(user.id)}
          key={user.id}
        >
          {user.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default List;
