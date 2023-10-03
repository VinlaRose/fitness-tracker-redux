import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../redux/actions";

function Food() {
  const dispatch = useDispatch();
  
  
  const food = useSelector((state) => state.food);

 
 
  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  return (
    <div>
      <h1>Food</h1>
      <ul>
        {food.map((food) => (
          <li key={food._id}> 
            {food.foodName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Food;
