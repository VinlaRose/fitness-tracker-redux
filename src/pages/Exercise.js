import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercise, addExercise, deleteExercise } from "../redux/actions"; 
import "../App.css"

function Exercise() {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercise);
  
  const [newExercise, setNewExercise] = useState({
    exerciseName: "",
    durationMinutes: 0,
    caloriesBurned: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExercise({
      ...newExercise,
      [name]: value,
    });
    console.log(newExercise)
  };

  const handleAddExercise = () => {
    console.log(newExercise)
    dispatch(addExercise(newExercise)); 
    setNewExercise({
      exerciseName: "",
      durationMinutes: 0,
      caloriesBurned: 0,
    });
  };

  const handleDeleteExercise = (exerciseId) => {
    
    dispatch(deleteExercise(exerciseId)); 
    
  };

  useEffect(() => {
    dispatch(fetchExercise());
  }, [dispatch]);

  return (
    <div>
      <h1>Exercise</h1>
      <div className="exercise-input">
        <input
          type="text"
          name="exerciseName"
          placeholder="Exercise Name"
          value={newExercise.exerciseName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="durationMinutes"
          placeholder="Duration (minutes)"
          value={newExercise.durationMinutes}
          onChange={handleChange}
        />
        <input
          type="number"
          name="caloriesBurned"
          placeholder="Calories Burned"
          value={newExercise.caloriesBurned}
          onChange={handleChange}
        />
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Exercise Name</th>
            <th>Duration (minutes)</th>
            <th>Calories Burned</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise,index) => (
            <tr key={index}>
              <td>{exercise.exerciseName}</td>
              <td>{exercise.durationMinutes}</td>
              <td>{exercise.caloriesBurned}</td>
              <td>
                <button onClick={() => handleDeleteExercise(exercise._id)}>
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

export default Exercise;
