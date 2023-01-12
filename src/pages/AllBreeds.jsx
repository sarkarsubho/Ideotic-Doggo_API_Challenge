import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getdata } from "../redux/app/action";
import { BreedCart } from "../components/BreedCart";
import styles from "./allBreeds.module.css";
import { Loader } from "../components/Loader";

export const AllBreeds = () => {
  const { breeds, loading } = useSelector((store) => store.app);
  const dispatch = useDispatch();
 
  // takinging all the breed name as a array for batter mapping  
  let allBreeds = Object.keys(breeds);

  useEffect(() => {
    dispatch(Getdata());
  }, []);
  return (
    <>
      {loading && <Loader message={"Loading Breeds Details..."}></Loader>}
      <div className={styles.allBreeds}>
        {allBreeds.map((e, i) => {
          return (
            // breed is the key name from allBreeds array subBreeds is the value from the particuler breeds key
            <BreedCart key={i} breed={e} subBreeds={breeds[e]}></BreedCart>
          );
        })}
      </div>
    </>
  );
};
