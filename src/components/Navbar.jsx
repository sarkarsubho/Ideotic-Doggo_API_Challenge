import React from "react";
import styles from "./navbar.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../redux/auth/action.types";

export const Navbar = () => {
  const { isAuth, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  let sortUsername = user?.name?.trim().split(" ");

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div className={styles.nav}>
      <div>
        <h1 className={styles.heading}>
          <Link to={"/"}>Doggo_API</Link>
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

            <div className={styles.iconbutton} onClick={handleLogout}>
              <button className={styles.button}>Logout</button>
              <FaPowerOff color="red" fontSize={"21px"} />
            </div>
          </div>
          {/* mobile nav Profile  */}

          <div className={styles.mobileProfile}>
            <div className={styles.mobileProfileName}>
              <IoPersonSharp fontSize={"26px"} />
              <span style={{ fontSize: "23px" }}>
                {sortUsername.length == 1
                  ? `${sortUsername[0][0]}${sortUsername[0][0]}`
                  : `${sortUsername[0][0]}${sortUsername[1][0]}`}
              </span>
            </div>

            <div className={styles.icon} onClick={handleLogout}>
              <FaPowerOff color="red" fontSize={"21px"} />
            </div>
          </div>
        </>
      ) : (
        <Link to={"/login"}>
          <div className={styles.iconbutton} >
            <button className={styles.button}>Login</button>
            <span className={styles.icon}>
              <FiLogIn fontSize={"20px"} color="green" />
            </span>
          </div>{" "}
        </Link>
      )}
    </div>
  );
};
