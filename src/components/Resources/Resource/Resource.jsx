import styles from "./Resource.module.css";
import { useNavigate } from "react-router-dom/dist";
import { useParams } from "react-router-dom";

const Resource = (props) => {
  const navigate = useNavigate();
  const param = useParams();
  const handleDetail = (event) => {
    console.log("AAAAAaAA");
    navigate(`/resources/${param.type}/${props.id}`);
  };
  return (
    <div>
      <div className={styles.box}>
        <h3 onClick={handleDetail}>
          <b>{props.resource.title}</b>
        </h3>
        <hr></hr>
        <p>{props.resource.description}</p>
      </div>
    </div>
  );
  // return (<><p>{props.resource.title}</p><small>{props.resource.description}</small></>)
};

export default Resource;
