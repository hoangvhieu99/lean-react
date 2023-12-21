export const initialState = {
  selectedId: 0,
  messages: {
    0: "",
  },
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        messages: {
          // Keep messages for other contacts
          ...state.messages,
          // But change the selected contact's message
          [state.selectedId]: action.message,
        },
      };
    }
    case "sent_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: "",
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
