import NetInfo from '@react-native-community/netinfo';

const updateObject = (initialObject, newParams) => {
  return {
    ...initialObject,
    ...newParams,
  };
};

export {updateObject};
