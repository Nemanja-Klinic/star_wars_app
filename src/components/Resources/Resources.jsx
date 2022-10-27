import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Resources = (props) => {
  const param = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, [param.type]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`https://swapi.dev/api/${param.type}`);
    const data = await response.json();
    setResults(data.results);
    console.log(data.results);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : results.length === 0 ? (
        <h1>No results</h1>
      ) : (
        <h1>{results.length}</h1>
      )}
    </>
  );
};

export default Resources;
