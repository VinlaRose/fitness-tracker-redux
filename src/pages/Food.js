import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFood, addFood, deleteFood } from "../redux/actions"; 
import "../App.css"

function Food() {
  const dispatch = useDispatch();
  
  
  const food = useSelector((state) => state.food);

 
  const [newFood, setNewFood] = useState({
    foodName: "",
    proteinGrams: 0,
    calories: 0,
    carbohydratesGrams: 0,
    fatGrams:0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood({
      ...newFood,
      [name]: value,
    });
    console.log(newFood)
  };

  const handleAddFood = () => {
    console.log(newFood)
    dispatch(addFood(newFood)); 
    setNewFood({
      foodName: "",
      proteinGrams: 0,
      calories: 0,
      carbohydratesGrams: 0,
      fatGrams:0,
    });
  };

  const handleDeleteFood = (exerciseId) => {
    
    dispatch(deleteFood(exerciseId)); 
    
  };
 
  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  return (
    <div>
      <h1>Food</h1>
      <div className="exercise-input">
        <input
          type="text"
          name="foodName"
          placeholder="Food Name"
          value={newFood.foodName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="proteinGrams"
          placeholder="Protein in Grams"
          value={newFood.proteinGrams}
          onChange={handleChange}
        />
        <input
          type="number"
          name="calories"
          placeholder="Calories Burned"
          value={newFood.calories}
          onChange={handleChange}
        />
        <input
          type="number"
          name="carbohydratesGrams"
          placeholder="Carbohydrates Burned"
          value={newFood.carbohydratesGrams}
          onChange={handleChange}
        />
        <input
          type="number"
          name="fatGrams"
          placeholder="Fat in grams"
          value={newFood.fatGrams}
          onChange={handleChange}
        />
        <button onClick={handleAddFood}>Add Exercise</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Proteins in gms</th>
            <th>Calories </th>
            <th>Carbohydrates</th>
            <th>Fat</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {food.map((food,index) => (
            <tr key={index}>
              <td>{food.foodName}</td>
              <td>{food.proteinGrams}</td>
              <td>{food.calories}</td>
              <td>{food.carbohydratesGrams}</td>
              <td>{food.fatGrams}</td>
              
              <td>
                <button onClick={() => handleDeleteFood(food._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Food;
