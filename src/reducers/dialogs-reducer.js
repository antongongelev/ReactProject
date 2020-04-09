const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: "1", name: "Anton" },
    { id: "2", name: "Elena" },
    { id: "3", name: "Pufic" },
    { id: "4", name: "Sasha" },
    { id: "5", name: "Kirill" },
  ],
  messages: [
    { id: 0, msg: "Hi" },
    { id: 1, msg: "Hello!" },
    { id: 2, msg: "YO" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = { id: 3, msg: action.message };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const sendMessage = (message) => ({ type: SEND_MESSAGE, ...message });

export default dialogsReducer;
