import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getdata } from "../redux/app/action";
import { BreedCart } from "../components/BreedCart";
import styles from "./allBreeds.module.css";


export const AllBreeds = () => {
  const allBreeds = useSelector((store) => store.app.breeds);
  const dispatch = useDispatch();

  let breeds = Object.keys(allBreeds);

  useEffect(() => {
    dispatch(Getdata());
  }, []);
  return (
    <div className={styles.allBreeds}>
      {breeds.map((e, i) => {
        return (
          
            <BreedCart key={i} breed={e} subBreeds={allBreeds[e]}></BreedCart>
          
        );
      })}
    </div>
  );
};
