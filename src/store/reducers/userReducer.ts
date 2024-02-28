import { User } from "../../Model/User";

// userReducer.ts
export type UserState = User | null;
  
  interface UpdateUserAction {
    type: 'UPDATE_USER';
    payload: User;
  }

  interface ClearUserAction {
    type: 'CLEAR_USER';
  }
  
  export type UserActions = UpdateUserAction | ClearUserAction;
  
  const initialState: UserState = null;
  
  export const userReducer = (state = initialState, action: UserActions): UserState | null => {
    switch (action.type) {
      case 'UPDATE_USER':
        return { ...action.payload };
      case 'CLEAR_USER':
        return null;
      default:
        return state;
    }
  };
  
  export default userReducer;
  