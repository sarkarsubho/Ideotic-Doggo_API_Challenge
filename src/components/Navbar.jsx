import React from "react";
import styles from "./navbar.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const {isAuth,user}=useSelector(store=>store.auth);
  // console.log(data);
  // let isAuth = true;

  return (
    <div className={styles.nav}>
      <div>
        <h1 className={styles.heading}>
          <Link to={"/"}>Ideotic-Doggo_API</Link>
        </h1>
      </div>

      {isAuth ? (
        <>
          <div className={styles.profile}>
            <div className={styles.account}>
              <div>
                <IoPersonSharp fontSize={"21px"} />
              </div>
              <div>{user.name}</div>
            </div>

            <div className={styles.iconbutton}>
              <button className={styles.button} >Logout</button>
              <FaPowerOff color="red" fontSize={"21px"} />
            </div>
          </div>
          {/* mobile nav Profile  */}

          <div className={styles.mobileProfile}>
            <IoPersonSharp fontSize={"26px"} />
          </div>
        </>
      ) : (
        <div className={styles.iconbutton}>
          <button className={styles.button}>Login</button>
          <FiLogIn fontSize={"20px"} color="green" />
        </div>
      )}
    </div>
  );
};
