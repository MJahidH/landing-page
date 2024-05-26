import { useState } from "react";
import "./App.css";
import foodImage from "./assets/image-omelette.jpeg";
import data from "./assets/omelette-recipe-data.json";

function App() {
  const instructionsData = data.instructions;
  const ingredientsData = data.ingredients;
  const nutritionData = data.nutrition;

  return (
    <>
      <div className="main-div">
        <div className="child">
          <img className="food-image" src={foodImage}></img>
          <h1 className="main-title">{data.title} </h1>
          <p className="main-description">{data.mainDescription}</p>
          <h1 className="prep-title">Preperation Time </h1>
          <ul className="prep-list">
            <li className="prep-bullet">
              <span className="bold-bullet">Total: </span>
              {data.preperationTime.total}
            </li>
            <li className="prep-bullet">
              <span className="bold-bullet">Preperation: </span>
              {data.preperationTime.preperation}
            </li>
            <li className="prep-bullet">
              <span className="bold-bullet">Cooking: </span>
              {data.preperationTime.cooking}
            </li>
          </ul>
          <h1 className="ingredients-title">Ingredients </h1>
          <ul className="ingredients-list">
            {ingredientsData.map((ingredient) => {
              return <li className="ingredient-bullet">{ingredient}</li>;
            })}
          </ul>
          <h1 className="instructions-title">Instructions </h1>
          <ol>
            {instructionsData.map((step) => {
              return (
                <li className="instruction-bullet">
                  <span className="bold-bullet">{step[0]}: </span>
                  {step[1]}
                </li>
              );
            })}
          </ol>
          <h1 className="instructions-title">Nutrition </h1>
          <p className="main-description">
            The table below shows nutritional values per serving without the
            additional fillings
          </p>
          <ul className="nutrition-list">
            {nutritionData.map((data) => {
              return (
                <li>
                  <div className="nutrition-div">
                    <div className="nutrition-list-title">{data[0]}</div>
                    <div className="nutrition-list-value">{data[1]}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
