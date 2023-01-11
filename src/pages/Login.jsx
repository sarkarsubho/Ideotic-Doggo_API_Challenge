import React, { useState } from "react";
import styles from "./login.module.css";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/action";
import { LOGINSUCCESS } from "../redux/auth/action.types";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [loginData, setLogin] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogin({ ...loginData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginData)).then((res) => {
      if (res.status === LOGINSUCCESS) {
        alert("Logedin Successfully...");
        setLogin({});
        navigate("/");
      } else {
        alert("Wrong Creadential. Please Enter correct one !");
      }
    });

    console.log(loginData);
  };
  return (
    <div className={styles.main}>
      <form className={styles.box} onSubmit={(e) => handleSubmit(e)}>
        <p>Welcome !</p>
        <div>
          <h1 className={styles.heading}>Login to</h1>
          <p>Ideotic-Doggo_API</p>
        </div>
        <div className={styles.inputdiv}>
          <label>Email</label>
          <input
            required
            className={styles.input}
            type="text"
            placeholder="Enter your Email"
            name="email"
            value={loginData?.email || ""}
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
       
       {/* Remember me and Forget Passsword is not implimented */}
        <div className={styles.rememberme}>
          <div>
            <input type="checkbox" />
            <label>Remenber me</label>
          </div>

          <div>Forget Password ?</div>
        </div>

        <input
          type={"submit"}
          className={styles.button}
          value={"Login"}
        ></input>

        <div className={styles.redirect}>
          don't have any accout?{" "}
          <Link to={"/register"}>
            <span> Register</span>
          </Link>{" "}
        </div>
      </form>
    </div>
  );
};
