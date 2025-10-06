  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import './Apis.css'
  function Apis() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="
    apis">
      {data.map(post => (
        <div key={post.id}>
          <h4>{post.id }:</h4>
          
          <h4>{post.title}:</h4>
          <p>{post.body}.</p>
        </div>
      ))}
    </div>
  );
}

export default Apis;

