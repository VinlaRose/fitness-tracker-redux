import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoals, addGoal, deleteGoal } from "../redux/actions"; 
import "../App.css"
function Goals() {
  const dispatch = useDispatch();
  
  
  const goals = useSelector((state) => state.goals);

  const [newGoal, setNewGoal] = useState({
    goalName: "",
    goalDescription: 0,
    targetDate: 0,
    targetCaloriesValue: 0,
    status:0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({
      ...newGoal,
      [name]: value,
    });
    console.log(newGoal)
  };

  const handleAddGoal = () => {
    console.log(newGoal)
    dispatch(addGoal(newGoal)); 
    setNewGoal({
        goalName: "",
    goalDescription: 0,
    targetDate: 0,
    targetCaloriesValue: 0,
    status:0,
    });
  };

  const handleDeleteGoal = (goalId) => {
    
    dispatch(deleteGoal(goalId)); 
    
  };
 
 
 
  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div>
      <h1>Goals</h1>
      <div className="exercise-input">
        <input
          type="text"
          name="goalName"
          placeholder="Goal Name"
          value={newGoal.goalName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="targetDate"
          placeholder=""
          value={newGoal.proteinGrams}
          onChange={handleChange}
        />
        <input
          type="number"
          name="targetCaloriesValue"
          placeholder="Calories "
          value={newGoal.targetCaloriesValue}
          onChange={handleChange}
        />
      
      
        <button onClick={handleAddGoal}>Add Exercise</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Goal </th>
            <th>Description</th>
            <th>Traget date </th>
            <th>Target Calories</th>
            <th>status</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {goals.map((goal,index) => (
            <tr key={index}>
              <td>{goal.goalName}</td>
              <td>{goal.goalDescription}</td>
              <td>{goal.targetDate}</td>
              <td>{goal.targetCaloriesValue}</td>
              <td>{goal.status}</td>
              
              <td>
                <button onClick={() => handleDeleteGoal(goal._id)}>
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

export default Goals;
