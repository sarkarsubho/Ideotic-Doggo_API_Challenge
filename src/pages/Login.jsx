import React, { useState } from "react";
import styles from "./login.module.css";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/action";
import { LOGINSUCCESS } from "../redux/auth/action.types";
import { Loader } from "../components/Loader";

export const Login = () => {
  const { isLoading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [loginData, setLogin] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    // setting values dynamic name as key and value as value;
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
    <>
    {/* showing loader only when isLoading state is true */}
      {isLoading && <Loader message={"Cheacking Login Data..."}></Loader>}

      <div className={styles.main}>
        <form className={styles.box} onSubmit={(e) => handleSubmit(e)}>
          {/* form header */}
          <p>Welcome !</p>
          <div>
            <h1 className={styles.heading}>Login to</h1>
            <p>Ideotic-Doggo_API</p>
          </div>
          
          {/* form Inputs */}
          <div className={styles.inputdiv}>
            <label for="email">Email</label>
            <input
              id="email"
              required
              className={styles.input}
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={loginData?.email || ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={styles.inputdiv}>
            <label for="password">Password</label>
            <div className={styles.password}>
              <input
                id="password"
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
              <input type="checkbox" id="checkbox" />
              <label for="checkbox">Remenber me</label>
            </div>

            <div>Forget Password ?</div>
          </div>

          <input
            type={"submit"}
            className={styles.button}
            value={"Login"}
          ></input>

          {/* redirect */}

          <div className={styles.redirect}>
            don't have any accout?{" "}
            <Link to={"/register"}>
              <span> Register</span>
            </Link>{" "}
          </div>
        </form>
      </div>
    </>
  );
};
