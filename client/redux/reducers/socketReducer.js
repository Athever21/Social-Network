export default (state = null, action) => {
  switch(action.type) {
    case 'ADD_SOCKET':
      return action.data;
    case 'REMOVE_SOCKET':
      return null;
    default: 
      return state;
  }
}