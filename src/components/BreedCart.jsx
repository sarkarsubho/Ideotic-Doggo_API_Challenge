import React from "react";
import styles from "./breedCart.module.css";
import { Link } from "react-router-dom";
export const BreedCart = ({ breed, subBreeds }) => {
  // console.log(breed, subBreeds);
  return (
    <div className={styles.main}>
      <Link to={`/details/${breed}`}>
        <h2>Breed Name:- {breed}</h2>
        <div>
          <h3>SubBreds :-</h3>

          {/* Maping all the sub-breeds if not there show default h4 text */}
          <div className={styles.subBreed}>
            {subBreeds.length > 0 ? (
              subBreeds.map((e, i) => (
                <h4 key={i}>
                  {i + 1}. {e}
                </h4>
              ))
            ) : (
              <h4>No sub-breed available</h4>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
