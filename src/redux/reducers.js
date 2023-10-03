const initialState = {
    exercise: [],
    food: [],
    goals: [],
    loading: false,
    error: null
  };
  
  const financeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_EXERCISE_SUCCESS":
        return {
          ...state,
          exercise: action.payload,
          loading: false,
          error: null
        };
      case "FETCH_FOOD_SUCCESS":
        return {
          ...state,
          food: action.payload,
          loading: false,
          error: null
        };
      case "FETCH_GOALS_SUCCESS":
        return {
          ...state,
          goals: action.payload,
          loading: false,
          error: null
        };
      case "FETCH_FOOD_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error fetching food data"
        };
      case "FETCH_EXERCISE_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error fetching exercise data"
        };
      case "FETCH_GOALS_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error fetching savings data"
        };
      case "ADD_ENTRY_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error fetching or adding data"
        };
      case "ADD_ENTRY_SUCCESS":
        if (action.payload.entryType === "income") {
          return {
            ...state,
            income: [...state.income, action.payload],
            loading: false,
            error: null
          };
        } else {
          return {
            ...state,
            expenses: [...state.expenses, action.payload],
            loading: false,
            error: null
          };
        }
      default:
        return state;
    }
  };
  
  export default financeReducer;
  