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
  
  export const addExercise = () => async (dispatch) => {
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
  export const deleteExercise = (exerciseId) => async (dispatch) => {
    try {
      const response = await fetch(
        `https://fitness-tracker-backend.vinlarose.repl.co/exercises/${exerciseId}`,
        {
          method: "DELETE",
        }
      );
  
      if (response.status === 204) {
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
  
  export const addEntry = (entry) => async (dispatch) => {
    try {
      const response = await fetch(
        "https://redux-example.tanaypratap.repl.co/add-entry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(entry)
        }
      );
  
      const data = await response.json();
      if (data.success === true) {
        dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data });
      }
    } catch (error) {
      console.error("Error adding entry:", error);
      dispatch({ type: "ADD_ENTRY_FAILURE" });
    }
  };
  