import React from "react";

import useJsonFetch from "../hooks/useJsonFetch/useJsonFetch";

function Error() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error", {
    method: "GET",
  });

  return <div style={{ color: "#FA8072" }}>ERROR : {error}</div>;
}

export default Error;
