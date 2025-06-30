import styles from "./styles/card-style.module.css";
import { useState } from "react";
import ownerPicture from "../assets/owner.jpg";


export default function Card() {
  const [movies, setMovies] = useState([
    "Volver al futuro",
    "    Shrek",
    "El Gato con Botas",
    "Spiderman: Into the Spiderverse"
  ]);

 function movie() {
  return movies.map(movie => (
    <li className={styles.card_movie_name}>{movie}   </li>
  ));
}

  return (
  <main className={styles.owner}>
    <div className={styles.card}>
      <img src={ownerPicture} alt="owner picture" className={styles.card_picture}/>
        <h2 className={styles.card_name}>Josias Yah Monroy</h2>
        <p className={styles.card_email}>josiasyahmonroy@gmail.com</p>
        <p className={styles.card_description}>Soy un desarrollador de frontend trabajando en esta pizzería, siempre intentando ofrecer lo mejor de mí a todos.</p>
        <h3 className={styles.card_movie}>Películas favoritas:</h3>
        <ul className={styles.card_movie_list}>
          {movie()}
        </ul>
    </div>
  </main>
  );
};