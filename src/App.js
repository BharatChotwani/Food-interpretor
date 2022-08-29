import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  "🧆": "falafel",
  "🥙": "stuffed flatbread",
  "🥯": "bagel",
  "🍢": "oden",
  "🥓": "bacon",
  "🥖": "baguette bread",
  "☕": "hot beverage",
  "🍷": "wine glass",
  "🍸": "cocktail glass",
  "🍹": "tropical drink",
  "🧉": "mate"
};

var foodWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodInputHandler(event) {
    const userInput = event.target.value;

    var meaning = foodDictionary[userInput];

    setMeaning(meaning);

    if (userInput in foodDictionary) {
      setMeaning(meaning);
    } else {
      setMeaning("This emoji isn't in Database.");
    }
  }
  function foodClickHandler(food) {
    var meaning = foodDictionary[food];
    setMeaning(meaning);
  }
  const listSty = {
    minWidth: "100px",
    listStyle: "none",
    paddingTop: "0.5rem",
    display: "inline"
  };
  const listItems = {
    display: "inline",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "1.5rem"
  };
  const headingSty = {
    color: "blue"
  };
  return (
    <div className="App">
      <h1>Foodpedia</h1>

      <input
        onChange={foodInputHandler}
        placeholder="Enter your food emoji to get meaning"
      />

      <h2> {meaning} </h2>

      <h3>
        <span style={headingSty}>food emoji </span>
        we know
      </h3>

      {foodWeKnow.map(function (food) {
        return (
          <ul style={listSty}>
            <li
              style={listItems}
              onClick={() => foodClickHandler(food)}
              key={food}
            >
              {food}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
