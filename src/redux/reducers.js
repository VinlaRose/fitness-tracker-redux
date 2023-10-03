const initialState = {
    exercise: [],
    food: [],
    goals: [],
    loading: false,
    error: null
  };
  
  const fitnessReducer = (state = initialState, action) => {
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
          error: null
        };
     
     
    case "DELETE_EXERCISE_SUCCESS":
        return {
            ...state,
            exercise: state.exercise.filter((exercise) => exercise._id !== action.payload),
          
              loading: false,
              error: null
            };
    case "DELETE_FOOD_SUCCESS":
                return {
                     ...state,
                     food: state.food.filter((food) => food._id !== action.payload),
          
                      loading: false,
                      error: "null"
                    };
    case "DELETE_GOAL_SUCCESS":
             return {
                             ...state,
                             goals: state.goals.filter((goals) => goals._id !== action.payload),
                              loading: false,
                              error: "null"
                            };  
     case "DELETE_EXERCISE_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error deleting  data"
        }; 
     case "DELETE_FOOD_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error deleting  data"
        };
      case "DELETE_GOAL_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error deleting  data"
        };
      
     
        case "ADD_EXERCISE_SUCCESS":
            return{
                ...state,
                exercise: [...state.exercise, action.payload],
                loading: false,
                error: null
            }
            case "ADD_FOOD_SUCCESS":
            return{
                ...state,
                food: [...state.food, action.payload],
                loading: false,
                error: null
            }
            case "ADD_GOAL_SUCCESS":
                return{
                    ...state,
                    goals: [...state.goals, action.payload],
                    loading: false,
                    error: null
                }
            
            
        case "ADD_EXERCISE_FAILURE":
            return{
                ...state,
                loading: false,
                error: "Error adding  data"
            }
 
     
      default:
        return state;
    }
  };
  
  export default fitnessReducer;
  