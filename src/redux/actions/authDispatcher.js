import UserService from '../services/UserService';
import {ACTION_TYPES} from './actionTypes';

export const getData = (payload, callback) => {
  return (dispatch) => {
    dispatch({type: ACTION_TYPES.UPDATE_LOADER, payload: true});
    const onSuccess = ({data, status}) => {
      console.log(' === response ==== ', data);
      dispatch({
        type: ACTION_TYPES.UPDATE_LOADER,
        payload: false,
      });
      if (status === 201) {
        callback(false);
      } else {
        dispatch({
          type: ACTION_TYPES.GET_DATA_SUCCESS,
          payload: data.data,
        });
        callback(true);
      }
    };

    const onError = (error) => {
      console.log(' === Error === ', error);
      dispatch({
        type: ACTION_TYPES.UPDATE_LOADER,
        payload: false,
      });
      callback(false);
    };

    // API hit Service
    new UserService().getData(payload).then(onSuccess).catch(onError);
  };
};
