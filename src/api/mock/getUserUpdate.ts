import { User } from '../../Model/User';
import { mockUser } from './mocks/mockData';

export const getUserUpdate = async (): Promise<User> => {
    await setTimeout(() => {}, 1000);
    
    return mockUser;
}