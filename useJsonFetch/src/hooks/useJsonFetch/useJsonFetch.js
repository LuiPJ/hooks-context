import React, { useState } from "react";

const useJsonFetch = (url, options) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(url, options)
        .then((response) => {
          if (response?.status === 500) {
            throw "500";
          }
          return response.json();
        })
        .then((json) => {
          setData(json);
          setLoading(false);
        })
        .catch((error) => setError(error.toString()));
    }, 1000);
  }, [url]);
  return [data, loading, error];
};

export default useJsonFetch;
