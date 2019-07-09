import React from "react";

export default function Recipes({ title, calories, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>calories:{calories}</p>
      <img src={image} alt="" />
    </div>
  );
}
