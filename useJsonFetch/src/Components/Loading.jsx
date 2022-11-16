import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

import useJsonFetch from "../hooks/useJsonFetch/useJsonFetch";

function Loading() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading", {
    method: "GET",
  });
  return (
    <div style={{ color: "#4B0082", display: "flex", alignItems: "center" }}>
      LOADING: &nbsp;
      <ClockLoader color="#36d7b7" loading={loading} size={30} />
    </div>
  );
}

export default Loading;
