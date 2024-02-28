import axios from 'axios';
import { User } from '../../Model/User';
import { getUserUpdate as getMockUserUpdate } from '../mock/getUserUpdate';
import { REACT_APP_USE_MOCKS } from '@env';

const getUserUpdate = async (): Promise<User> => {
    console.log('TESTING TESTING')
    if(REACT_APP_USE_MOCKS === 'true') {
        
        const data = getMockUserUpdate();
        console.log(data)
        return data;
    }

    const response = await axios.get('/api/user');
    const data = response.data as User;
    return data;
}

export default getUserUpdate;