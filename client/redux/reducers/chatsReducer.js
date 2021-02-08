export default (state = [], action) => {
  switch (action.type) {
    case "ADD_CHAT":
      if (state.find((x) => x.user.username === action.data.user.username)) {
        return state;
      }
      return [
        ...state,
        {
          user: action.data.user,
          messages: [],
        },
      ];
    case "CLOSE_CHAT":
      return state.filter((x) => x.user.username !== action.data.user);
    case "UPDATE_CHAT":
      const index = state.findIndex(
        (x) => x.user.username === action.data.user
      );
      state[index] = {
        user: state[index].user,
        messages: [...state[index].messages, action.data.message],
      };
      return [...state];
    case "LOAD_MORE": {
      const index = state.findIndex(
        (x) => x.user.username === action.data.user
      );
      state[index] = {
        user: state[index].user,
        messages: [...action.data.messages,...state[index].messages],
      };
      return [...state];
    }
    case "LOAD_CHAT": {
      const index = state.findIndex(
        (x) => x.user.username === action.data.user
      );
      state[index] = {
        user: state[index].user,
        messages: action.data.messages,
      };
      return [...state];
    }
    case "READ_MESSAGE": {
      const index = state.findIndex(
        (x) => x.user.username === action.data.user
      );
      const chat = state[index];
      const i = chat.messages.findIndex((x) => x.id === action.data.message.id);
      chat.messages[i] = action.data.message;
      state[index] = chat;
      return [...state];
    }
    default:
      return state;
  }
};
