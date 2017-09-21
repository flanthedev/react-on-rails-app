export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_USERS':
      // return { ...state, [action.payload.id]: action.payload.data };
      return action.payload.data;
    default:
      return state;
  }
}