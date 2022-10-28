import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Resource from "./Resource/Resource";
import { extraxtData } from "../../utils/extraxtData";
import styles from "./Resources.module.css";
import { debounce } from "../../utils/debounce";

const Resources = (props) => {
  const param = useParams();
  const [resources, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [param.type]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/${param.type}`
    );
    const data = await response.json();
    const mapData = extraxtData(data.results, param.type);
    console.log(data.results);
    setResults(mapData);
    setIsLoading(false);
  };
  const handleSearch = async (event) => {
    if (event.target.value) {
      const resp = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${param.type}/?search=${event.target.value}`
      );
      const data = await resp.json();
      const mapData = extraxtData(data.results, param.type);
      setResults(mapData);
      setIsLoading(false);
    } else {
      fetchData();
    }
  };
  return (
    <>
      {/* {isLoading && resources.length === 0 ? (
        <div className={styles.loader}></div>
      ) : null}
      {!isLoading && resources.length !== 0 ? (
        <div className={styles.grid}>
          {resources.map((res) => {
            return <Resource key={res.title} resource={res} />;
          })}
        </div>
      ) : null}
      {!isLoading && resources.length === 0 ? <h1>No results</h1> : null} */}

      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.searchWrapper}>
            <input
              className={styles.inputStyle}
              type="text"
              onChange={debounce(handleSearch, 1000)}
              placeholder="search.."
            />
          </div>
          {resources.length === 0 ? (
            <h1>No results</h1>
          ) : (
            <div className={styles.grid}>
              {resources.map((res, index) => {
                return (
                  <Resource key={res.title} id={index + 1} resource={res} />
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Resources;
