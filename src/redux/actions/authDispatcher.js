import UserService from '../../services/UserService';
import {ACTION_TYPES} from './actionTypes';

export const getData = (url, callback) => {
  return (dispatch) => {
    dispatch({type: ACTION_TYPES.UPDATE_LOADER, payload: true});
    const onSuccess = (data) => {
      console.log(' === response ==== ', data);
      dispatch({
        type: ACTION_TYPES.UPDATE_LOADER,
        payload: false,
      });
      if (data.status == 200) {
        dispatch({
          type: ACTION_TYPES.GET_DATA_SUCCESS,
          payload: data.data,
        });
        callback(true);
      } else {
        callback(false);
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
    new UserService().getData(url).then(onSuccess).catch(onError);
  };
};
