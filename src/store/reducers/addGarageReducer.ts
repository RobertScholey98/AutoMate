import { ADD_GARAGE } from "./actions/addGarage";

const initialState = {
    garage: {},
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_GARAGE: {
      const { garage } = action.payload
      return {
        ...state,
        garage
      };
    }
    default:
      return state;
  }
}

export default todoReducer;