import { Garage } from "../../Model/Garage";

export const ADD_GARAGE = "ADD_GARAGE";

let garage;

export const addTodo = (garage: Garage) => ({
  type: ADD_GARAGE,
  payload: {
    garage
  }
});