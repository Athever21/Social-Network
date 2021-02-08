export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST': 
      return [action.data,...state];
    case 'ADD_POSTS':
      return [...state,...action.data];
    case 'DELETE_POST':
      return state.filter(x => x.id !== action.data.id);
    default:
      return state;
  }
}