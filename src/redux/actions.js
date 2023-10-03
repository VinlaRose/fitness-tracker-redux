export const fetchExercise = () => async (dispatch) => {
    try {
      const response = await fetch(
        "https://fitness-tracker-backend.vinlarose.repl.co/exercises"
      );
      const data = await response.json();
      dispatch({ type: "FETCH_EXERCISE_SUCCESS", payload: data });
    } catch (error) {
      console.error("Error fetching EXERCISE data:", error);
      dispatch({ type: "FETCH_EXERCISE_FAILURE" });
    }
  };
  
  export const addExercise = (exerciseData) => async (dispatch) => {
    try {
      const response = await fetch(
        "https://fitness-tracker-backend.vinlarose.repl.co/exercises",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          
          body: JSON.stringify(exerciseData), 
        }
      );
  
      if (response.status === 201) {
        const data = await response.json();
        console.log(data)
        dispatch({ type: "ADD_EXERCISE_SUCCESS", payload: data.newExercise });
      } else {
        console.error("Error adding exercise. Status:", response.status);
        dispatch({ type: "ADD_EXERCISE_FAILURE" });
      }
    } catch (error) {
      console.error("Error adding exercise:", error);
      dispatch({ type: "ADD_EXERCISE_FAILURE" });
    }
  };
  
  export const deleteExercise = (exerciseId) => async (dispatch) => {
    try {
      const response = await fetch(
        `https://fitness-tracker-backend.vinlarose.repl.co/exercises/${exerciseId}`,
        {
          method: "DELETE",
        
        }
      );
  
      if (response.status === 200) {
        dispatch({ type: "DELETE_EXERCISE_SUCCESS", payload: exerciseId });
      } else {
        console.error("Error deleting exercise. Status:", response.status);
        dispatch({ type: "DELETE_EXERCISE_FAILURE" });
      }
    } catch (error) {
      console.error("Error deleting exercise:", error);
      dispatch({ type: "DELETE_EXERCISE_FAILURE" });
    }
  };
  
  
  export const fetchGoals = () => async (dispatch) => {
    try {
      const response = await fetch(
       "https://fitness-tracker-backend.vinlarose.repl.co/goals"
      );
      const data = await response.json();
      dispatch({ type: "FETCH_GOALS_SUCCESS", payload: data });
    } catch (error) {
      console.error("Error fetching savings data:", error);
      dispatch({ type: "FETCH_GOALS_FAILURE" });
    }
  };
  
  export const addGoal = (goalData) => async (dispatch) => {
    try {
      const response = await fetch(
        "https://fitness-tracker-backend.vinlarose.repl.co/goals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          
          body: JSON.stringify(goalData), 
        }
      );
  
      if (response.status === 201) {
        const data = await response.json();
        console.log(data)
        dispatch({ type: "ADD_GOAL_SUCCESS", payload: data.newGoal });
      } else {
        console.error("Error adding goal. Status:", response.status);
        dispatch({ type: "ADD_GOAL_FAILURE" });
      }
    } catch (error) {
      console.error("Error adding goal:", error);
      dispatch({ type: "ADD_GOAL_FAILURE" });
    }
  };
  
  export const deleteGoal = (goalId) => async (dispatch) => {
    try {
      const response = await fetch(
        `https://fitness-tracker-backend.vinlarose.repl.co/goals/${goalId}`,
        {
          method: "DELETE",
        
        }
      );
  
      if (response.status === 200) {
        dispatch({ type: "DELETE_EXERCISE_SUCCESS", payload: goalId });
      } else {
        console.error("Error deleting exercise. Status:", response.status);
        dispatch({ type: "DELETE_EXERCISE_FAILURE" });
      }
    } catch (error) {
      console.error("Error deleting exercise:", error);
      dispatch({ type: "DELETE_EXERCISE_FAILURE" });
    }
  };
  
  
  
  
  
  
  
  export const fetchFood = () => async (dispatch) => {
    try {
      const response = await fetch(
        'https://fitness-tracker-backend.vinlarose.repl.co/food'
      );
      const data = await response.json();
      console.log({ data });
      dispatch({ type: "FETCH_FOOD_SUCCESS", payload: data });
    } catch (error) {
      console.error("Error fetching food data:", error);
      dispatch({ type: "FETCH_FOOD_FAILURE" });
    }
  };
  
  export const addFood = (foodData) => async (dispatch) => {
    try {
      const response = await fetch(
        "https://fitness-tracker-backend.vinlarose.repl.co/food",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          
          body: JSON.stringify(foodData), 
        }
      );
  
      if (response.status === 201) {
        const data = await response.json();
        console.log(data)
        dispatch({ type: "ADD_FOOD_SUCCESS", payload: data.newFoodItem });
      } else {
        console.error("Error adding exercise. Status:", response.status);
        dispatch({ type: "ADD_FOOD_FAILURE" });
      }
    } catch (error) {
      console.error("Error adding exercise:", error);
      dispatch({ type: "ADD_FOOD_FAILURE" });
    }
  };
  
  export const deleteFood = (foodId) => async (dispatch) => {
    try {
      const response = await fetch(
        `https://fitness-tracker-backend.vinlarose.repl.co/food/${foodId}`,
        {
          method: "DELETE",
        
        }
      );
  
      if (response.status === 200) {
        dispatch({ type: "DELETE_FOOD_SUCCESS", payload: foodId });
      } else {
        console.error("Error deleting food. Status:", response.status);
        dispatch({ type: "DELETE_FOOD_FAILURE" });
      }
    } catch (error) {
      console.error("Error deleting food:", error);
      dispatch({ type: "DELETE_FOOD_FAILURE" });
    }
  };
  
  