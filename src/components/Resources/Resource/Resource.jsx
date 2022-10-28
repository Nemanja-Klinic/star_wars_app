import { useParams } from "react-router-dom/dist";
import styles from "./Resource.module.css";
import { useNavigate } from "react-router-dom/dist";

const Resource = (props) => {
  const param = useParams();
  const navigate = useNavigate();
  const handleDetail = () => {};

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
