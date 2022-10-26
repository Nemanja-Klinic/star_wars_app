import styles from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={styles.card}>
      <form className={styles.form}>
        <h1>Login</h1>
        <div>
          <label>Email:</label>
          <input type="text" placeholder="Type email.." />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Type password.." />
        </div>
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;
