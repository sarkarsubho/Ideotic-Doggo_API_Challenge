import React,{useState} from "react";
import styles from "./register.module.css";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/action";
import { REGISTERSUCCESS } from "../redux/auth/action.types";

export const Register = () => {
    const navigate = useNavigate();
    let [registerData, setRegisterData] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const dispatch=useDispatch();
    const handleChange = (e) => {
      let { name, value } = e.target;
      setRegisterData({ ...registerData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
      console.log(registerData);
       dispatch(register(registerData)).then((res)=>{
          if(res.status===REGISTERSUCCESS){
            alert("REgistered Successfully..");
            navigate("/login");
            setRegisterData({});
          }else{

            alert(res.message)
          }
       })
      
    };
    return (
      <div className={styles.main}>
        <form className={styles.box}  onSubmit={(e)=>handleSubmit(e)}>
          <p>Welcome !</p>
          <div>
            <h1 className={styles.heading}>Register to</h1>
            <p>Ideotic-Doggo_API</p>
          </div>
          <div className={styles.inputdiv}>
            <label>User name</label>
            <input
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
            <label>Email</label>
            <input
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
            <label>Password</label>
  
            <div className={styles.password}>
              <input
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
            <label>Mobile</label>
            <input
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

  
          <input type="submit" className={styles.button} value={"Register"}>
            
          </input>
  
          <div className={styles.redirect}>
            Already have an accout?{" "}
            <Link to={"/login"}>
              <span> Login</span>
            </Link>{" "}
          </div>
        </form>
      </div>
    );
};
