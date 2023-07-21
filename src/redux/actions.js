export const addFav = (character) => ({
    type: 'ADD_FAV',
    payload: character,
});

export const removeFav = (id) => ({
    type: 'REMOVE_FAV',
    payload: id,
});

export const filterCards = (gender) => {
    return {
      type: 'FILTER',
      payload: gender,
    };
  };

  export const orderCards = (order) => {
    return {
      type: 'ORDER',
      payload: order,
    };
  };