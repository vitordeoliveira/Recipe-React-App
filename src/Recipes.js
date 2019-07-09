import React from "react";
import style from "./recipe.module.css";

export default function Recipes({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingridient => (
          <li>{ingridient.text}</li>
        ))}
      </ol>
      <p>calories:{parseFloat(calories.toFixed(2))}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
}
