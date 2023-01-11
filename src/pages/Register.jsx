import React,{useState} from "react";
import styles from "./register.module.css";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    let [registerData, setREgisterData] = useState({});
    const [showPassword, setShowPassword] = useState(false);
   
    const handleChange = (e) => {
      let { name, value } = e.target;
      setREgisterData({ ...registerData, [name]: value });
    };
    const handleSubmit = () => {
      console.log(registerData);
 
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
              value={registerData?.username || ""}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={styles.inputdiv}>
            <label>Email</label>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your Email "
              name="email"
              value={registerData?.email || ""}
              onChange={(e) => handleChange(e)}
            />
          </div>
  
          <div className={styles.inputdiv}>
            <label>Password</label>
  
            <div className={styles.password}>
              <input
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
            <label>Mobile</label>
            <input
              className={styles.input}
              type="number"
              placeholder="Enter your Mobile no "
              name="phone"
              value={registerData?.phone || ""}
              onChange={(e) => handleChange(e)}
            />
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
            Already have an accout?{" "}
            <Link to={"/login"}>
              <span> Login</span>
            </Link>{" "}
          </div>
        </div>
      </div>
    );
};
