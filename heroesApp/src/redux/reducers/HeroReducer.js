
import Types from '../types/Types';

const initialState = {
  heroes: [],
  loading: false,
};

const HeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_HEROES:
      return {...state, heroes: action.payload};
    default:
      return state;
  }
};

export default HeroReducer;