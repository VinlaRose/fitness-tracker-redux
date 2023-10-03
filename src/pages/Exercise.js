import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercise } from "../redux/actions";

function Exercise() {
  const dispatch = useDispatch();
  
  
  const exercises = useSelector((state) => state.exercise);

  console.log(exercises);
 
  useEffect(() => {
    dispatch(fetchExercise());
  }, [dispatch]);

  return (
    <div>
      <h1>Exercise</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise._id}> 
            {exercise.exerciseName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise;
