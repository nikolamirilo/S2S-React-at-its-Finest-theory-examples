import React from "react";
import useFetch from "../Hooks/useFetch";

const Fetch = () => {
  const {
    loading,
    error,
    data = [],
  } = useFetch("https://hn.algolia.com/api/v1/search?query=react");

  if (error) return <p className="error">Error!</p>;
  if (loading) return <p className="loading">Loading...</p>;
  else
    return (
      <div className="fetch">
        <ul>
          {data?.hits?.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
};
export default Fetch;
