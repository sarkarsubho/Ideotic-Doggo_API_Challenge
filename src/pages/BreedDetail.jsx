import React, { useEffect, useState } from "react";
import styles from "./breedDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export const BreedDetail = () => {
  const params = useParams();
  //  console.log(params.breed)
  const [image, setImage] = useState("");

  const getImage = () => {
    axios
      .get(`https://dog.ceo/api/breed/${params.breed}/images/random`)
      .then((res) => {
        setImage(res.data.message);
      });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className={styles.main}>
      <h2>Category Details</h2>
      <div className={styles.box}>
        <img src={image} alt="" />
        <h2>Breed Name : {params.breed}</h2>
      </div>
    </div>
  );
};
