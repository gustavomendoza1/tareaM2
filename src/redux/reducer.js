const initialState = {
    myFavorites: [],
    allCharacters: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAV':
        return {
          ...state,
          allCharacters: [...state.allCharacters, action.payload],
        };
      case 'REMOVE_FAV':
        return {
          ...state,
          allCharacters: state.allCharacters.filter((character) => character.id !== action.payload),
        };
      case 'FILTER':
        const filteredCharacters = state.allCharacters.filter((character) => character.gender === action.payload);
        return {
          ...state,
          myFavorites: filteredCharacters,
        };
      case 'ORDER':
        const sortedFavorites = [...state.myFavorites];
        sortedFavorites.sort((a, b) => {
          if (action.payload === 'A') {
            return a.id - b.id;
          } else if (action.payload === 'D') {
            return b.id - a.id;
          } else {
            return 0;
          }
        });
        return {
          ...state,
          myFavorites: sortedFavorites,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  