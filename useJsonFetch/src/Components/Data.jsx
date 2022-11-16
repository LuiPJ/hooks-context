import React from "react";
import useJsonFetch from "../hooks/useJsonFetch/useJsonFetch";

function Data() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data", {
    method: "GET",
  });
  return <div style={{ color: "#7B68EE" }}>DATA: {data?.status}</div>;
}

export default Data;
