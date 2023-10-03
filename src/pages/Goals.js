import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoals } from "../redux/actions";

function Goals() {
  const dispatch = useDispatch();
  
  
  const goals = useSelector((state) => state.goals);

 
 
  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div>
      <h1>Goals</h1>
      <ul>
        {goals.map((goal) => (
          <li key={goal._id}> 
            {goal.goalName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Goals;
