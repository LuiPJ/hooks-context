import React, { useState, useEffect } from "react";

import List from "./Components/List/List";
import Details from "./Components/Details/Details";

import "./main.css";

function App() {
  const [users, setUsers] = useState([]);
  const [idCurrentUser, setIdCurrentUser] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const isCurrentUser = (index) => {
    setIdCurrentUser(index);
  };

  return (
    <div className="container">
      <List users={users} currentUser={isCurrentUser} />
      {idCurrentUser && <Details id={idCurrentUser} />}
    </div>
  );
}

export default App;
