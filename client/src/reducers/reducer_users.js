import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_USERS':
    return _.mapKeys(action.payload, 'id');

    case 'FETCH_USER':
      if (!action.payload) return state;
      return { ...state, [action.payload.id]: action.payload };
    
    case 'FETCH_USER_FAILURE':
      return action.payload;
    
    default:
      return state;
  }
}