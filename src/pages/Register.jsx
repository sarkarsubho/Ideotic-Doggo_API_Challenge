import React, { useState } from "react";
import styles from "./register.module.css";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/auth/action";
import { REGISTERSUCCESS } from "../redux/auth/action.types";
import { Loader } from "../components/Loader";

export const Register = () => {
  const { isLoading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  let [registerData, setRegisterData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

// setting values onChange Event. dynamic name as key and value as value ;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
    // dispatching data to register function and if is successsfully register then redirecting
    dispatch(register(registerData)).then((res) => {
      if (res.status === REGISTERSUCCESS) {
        alert("Registered Successfully..");
        navigate("/login");
        setRegisterData({});
      } else {
        alert(res.message);
      }
    });
  };

  return (
    <>
     
    {/* showing loader only when isLoading state is true */}
      {isLoading && <Loader message={"Cheacking Register details..."}></Loader>}
      <div className={styles.main}>
        <form className={styles.box} onSubmit={(e) => handleSubmit(e)}>
          {/* Form header */}
          <p>Welcome !</p>
          <div>
            <h1 className={styles.heading}>Register to</h1>
            <p>Ideotic-Doggo_API</p>
          </div>

          {/* Form Inputs */}

          <div className={styles.inputdiv}>
            <label for="name">User name</label>
            <input
              id="name"
              className={styles.input}
              type="text"
              placeholder="Enter your user name "
              name="name"
              required
              value={registerData?.name || ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={styles.inputdiv}>
            <label for="email">Email</label>
            <input
              id="email"
              required
              className={styles.input}
              type="email"
              placeholder="Enter your Email "
              name="email"
              value={registerData?.email || ""}
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
                value={registerData?.password || ""}
                onChange={(e) => handleChange(e)}
              />
              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <ImEyeBlocked /> : <ImEye />}
              </div>
            </div>
          </div>

          <div className={styles.inputdiv}>
            <label for="phone">Mobile</label>
            <input
              id="phone"
              required
              className={styles.input}
              type="number"
              maxLength={10}
              placeholder="Enter your Mobile no "
              name="phone"
              value={registerData?.phone || ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <input
            type="submit"
            className={styles.button}
            value={"Register"}
          ></input>

          {/* redirecting */}

          <div className={styles.redirect}>
            Already have an accout?{" "}
            <Link to={"/login"}>
              <span> Login</span>
            </Link>{" "}
          </div>
        </form>
      </div>
    </>
  );
};
