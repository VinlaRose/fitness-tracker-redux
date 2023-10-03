import React, { useEffect, useState } from "react";
import "../App.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchExercise, fetchFood, fetchGoals } from "../redux/actions";

function Dashboard() {
    const dispatch = useDispatch();
  
    const state = useSelector((state) => state);
    console.log(state);
    
    useEffect(() => {
        dispatch(fetchGoals());
        dispatch(fetchExercise());
        dispatch(fetchFood());
        
      }, [dispatch]);

      
      const totalCaloriesBurned = state.exercise.reduce((total, exercise) => {
        return total + exercise.caloriesBurned;
      }, 0);
      
      const totalCaloriesConsumed =  state.food.reduce((total, food) => {
        return total + food.calories;
      }, 0);
      
      const totalCaloriesGoal =  state.goals.reduce((total, goal) => {
        return total + goal.targetCaloriesValue;
      }, 0);
      
      const remainingCalories = totalCaloriesGoal - totalCaloriesConsumed
  return (
    
    <div>
     <h1>Dashboard</h1>
     <div className="dashboard-container">
      <div className="dashboard-summary">
        <div className="dashboard-metric">
          <span>Total Calories Burned:</span>
          <span>{totalCaloriesBurned} calories</span>
        </div>
        <div className="dashboard-metric">
          <span>Total Calories Consumed:</span>
          <span>{totalCaloriesConsumed} calories</span>
        </div>
        <div className="dashboard-metric">
          <span>Total Calories Goal:</span>
          <span>{totalCaloriesGoal} calories</span>
        </div>
        <div className="dashboard-metric">
          <span>Remaining Calories to Goal:</span>
          <span>{remainingCalories} calories</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
