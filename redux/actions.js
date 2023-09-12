// src/redux/actions.js
export const addSuggestion = (suggestion) => {
    return {
      type: 'ADD_SUGGESTION',
      payload: suggestion,
    };
  };
  