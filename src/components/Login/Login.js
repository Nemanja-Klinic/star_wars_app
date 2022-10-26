import styles from "./Login.module.css";
import { useState, useRef } from "react";

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

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
    } else {
      setErrorMessage(true);
    }
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div className={styles.card}>
      <form className={styles.form} onSubmit={submitionHandler}>
        <h1>Login</h1>
        <div>
          <label>Email:</label>
          <input
            type="text"
            id="email"
            ref={emailRef}
            placeholder="Type email.."
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Type password.."
          />
        </div>
        <button>login</button>
        {errorMessage ? <p className={styles.error}>Bad credentials</p> : null}
      </form>
    </div>
  );
};

export default Login;
