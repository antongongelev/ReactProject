const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: "1", name: "Anton" },
    { id: "2", name: "Elena" },
    { id: "3", name: "Pufic" },
    { id: "4", name: "Sasha" },
    { id: "5", name: "Kirill" }
  ],
  messages: [
    { id: 0, msg: "Hi" },
    { id: 1, msg: "Hello!" },
    { id: 2, msg: "YO" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };
    case SEND_MESSAGE:
      let newMessage = { id: 3, msg: state.newMessageBody };
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, newMessage]
      };
    default:
      return state;
  }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

export default dialogsReducer;
