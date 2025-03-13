import React, { useEffect, useState } from "react";

const ExpenceTrack = () => {
  const [category, setCategory] = useState([]);
  const [newCat, SetNewCat] = useState();

  const handleSubmit = () => {
    setCategory([...category, { text: newCat, completed: false }]);
  };
  const handleComplete = (index) => {
    // Create a copy of the current categories
    const newCategories = [...category];
    console.log(newCategories);
    // Get the item we want to change
    let itemToChange = newCategories[index];
    console.log(itemToChange);

    // If the item is just a string (like in your original code)
    if (typeof itemToChange === "string") {
      // Convert it to an object with a completed property
      newCategories[index] = { text: itemToChange, completed: true };
    } else {
      // If it's already an object, just flip the completed status
      itemToChange.completed = !itemToChange.completed;
    }

    // Update the state with our new array
    setCategory(newCategories);
  };
  //   console.log(status);
  return (
    <div className="d-flex flex-column align-item-center justify-content-center">
      <input
        type="text"
        value={newCat}
        onChange={(e) => {
          SetNewCat(e.target.value);
        }}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
      {category.map((item, index) => {
        return (
          <div key={index} className="d-flex  mt-2 justify-content-evenly">
            <button
              className="btn btn-primary"
              onClick={() => {
                handleComplete(index);
              }}
            >
              Status
            </button>
            <h1
              className={`${
                item.completed
                  ? "text-decoration-underline"
                  : "text-decoration-line-through"
              }`}
            >
              {item.text}
            </h1>
            <button className="btn btn-danger">Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenceTrack;
