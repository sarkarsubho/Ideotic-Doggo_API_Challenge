import React, { useState } from "react";
import styles from "./login.module.css";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate();
  let [loginData, setLogin] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogin({ ...loginData, [name]: value });
  };
  const handleSubmit = () => {
    console.log(loginData);

   
  };
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <p>Welcome !</p>
        <div>
          <h1 className={styles.heading}>Login to</h1>
          <p>Ideotic-Doggo_API</p>
        </div>
        <div className={styles.inputdiv}>
          <label>User name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your user name "
            name="username"
            value={loginData?.username || ""}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.inputdiv}>
          <label>Password</label>

          <div className={styles.password}>
            <input
              required
              className={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              value={loginData?.password || ""}
              onChange={(e) => handleChange(e)}
            />
            <div onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <ImEyeBlocked /> : <ImEye />}
            </div>
          </div>
        </div>

        <div className={styles.rememberme}>
          <div>
            <input type="checkbox" />
            <label>Remenber me</label>
          </div>

          <div>Forget Password ?</div>
        </div>

        <button className={styles.button} onClick={handleSubmit}>
          {" "}
          Login
        </button>

        <div className={styles.redirect}>
          don't have any accout?{" "}
          <Link to={"/register"}>
            <span> Register</span>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};
