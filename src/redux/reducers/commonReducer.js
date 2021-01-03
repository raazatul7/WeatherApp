import {ACTION_TYPES} from '../actions/actionTypes';
import {updateObject} from '../../utils';

export const initialState = {
  isLoader: false,
};

const commonReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ACTION_TYPES.UPDATE_LOADER:
      return updateObject(state, {isLoader: payload});

    default:
      return {...state};
  }
};

export default commonReducer;
