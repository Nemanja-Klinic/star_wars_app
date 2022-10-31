import styles from "./Login.module.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = (props) => {
  let navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("resources/planets");
  }, []);

  const validateForm = (email, password) => {
    const isEmailValid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    return isEmailValid && password.length > 7;
  };

  const submitionHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (validateForm(email, password)) {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: email, password: password })
      );
      setErrorMessage(false);
      navigate("resources/planets");
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className={styles.wrap}>
      <form className={styles.cover} onSubmit={submitionHandler}>
        <img src="/icon.png" alt="star wars" />
        <label>Email:</label>
        <input
          onFocus={(e) => {
            setErrorMessage(false);
          }}
          type="text"
          id="email"
          ref={emailRef}
          placeholder="Type email.."
        />
        <label>Password:</label>
        <input
          onFocus={(e) => {
            setErrorMessage(false);
          }}
          ref={passwordRef}
          type="password"
          placeholder="Type password.."
        />
        <button>login</button>
        {errorMessage ? (
          <p className={styles.error}>Gde ces u nekoseno!</p>
        ) : null}
      </form>
    </div>
  );
};

export default Login;
