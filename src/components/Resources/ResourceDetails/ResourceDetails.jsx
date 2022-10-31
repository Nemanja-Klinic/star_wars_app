import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { extraxtData } from "../../../utils/extraxtData";
import styles from "./ResourceDetails.module.css";

const ResourceDetails = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const param = useParams();
  let detail = {};
  useEffect(() => {
    fetchDetail();
  }, []);
  const fetchDetail = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/${param.type}/${param.id}/`
    );
    const data = await response.json();
    const resource = extraxtData([data], param.type);
    console.log(resource[0].title);
    setTitle(resource[0].title);
    setDescription(resource[0].description);
    console.log(resource);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ResourceDetails;
