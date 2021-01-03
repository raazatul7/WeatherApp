const updateObject = (initialObject, newParams) => {
  return {
    ...initialObject,
    ...newParams,
  };
};

export {updateObject};
