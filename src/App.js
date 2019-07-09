import React, { useEffect, useState } from "react";
import Recipe from "./Recipes";
import "./App.css";

function App() {
  const APP_ID = "c754883f";
  const APP_KEY = "07647d8de1d53f40e265e0a14d630ce9";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  // const getRecipes = async () => {
  //   await fetch(
  //     `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  //   )
  //     .then(data => data.json())
  //     .then(data => console.log(data));
  //     setRecipes(data.hits);
  // };
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          SUBMIT
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
