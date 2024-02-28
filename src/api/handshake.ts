import { Action } from 'redux';
import { REACT_APP_USE_MOCKS } from '@env';

import { User } from '../Model/User';
import { Garage } from '../Model/Garage';
import { updateUser } from '../store/actions/userActions';
import userApi from './user';

export enum handshakeActions {
    UPDATE_USER = 'UPDATE_USER',
    DO_NOTHING = 'DO_NOTHING',
    UPDATE_GARAGE = 'UPDATE_GARAGE',
}
// Action Creators

const doNothing = () => {
    // do something or no?
};

const getGarageUpdate = async () => {
    // todo add actions to garage store
};

// Thunk Action Creator
export const handshake = (hashCode: string) => async (dispatch: (action: Action) => void) => {
  console.log('testing handshake')
  if(REACT_APP_USE_MOCKS === 'true') {
    return dispatch(updateUser(await userApi.getUserUpdate()));
  } else {
    try {
      const response = await fetch('/api/handshake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hashCode }),
      });
      const data = await response.json() as handshakeActions;
  
      if (data === handshakeActions.DO_NOTHING) {
          doNothing
      } else if(data === handshakeActions.UPDATE_USER) {
          const user = await userApi.getUserUpdate();
          dispatch(updateUser(user));
      } else if(data === handshakeActions.UPDATE_GARAGE) {
          await getGarageUpdate();
      }
    } catch (error) {
      console.error('Handshake error:', error);
    }
  }
  
};