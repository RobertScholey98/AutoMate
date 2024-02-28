import { User } from "../../Model/User";

export const updateUser = (data: User) => ({
    type: 'UPDATE_USER',
    payload: data,
});