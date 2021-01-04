import {ACTION_TYPES} from '../actions/actionTypes';
import {updateObject} from '../../utils';

export const initialState = {
  userData: {},
};

const userData = (state = initialState, {type, payload}) => {
  switch (type) {
    case ACTION_TYPES.GET_DATA_SUCCESS:
      return updateObject(state, {userData: payload});

    default:
      return {...state};
  }
};

export default userData;
