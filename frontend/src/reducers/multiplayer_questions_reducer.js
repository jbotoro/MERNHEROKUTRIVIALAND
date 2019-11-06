import {
  CREATE_NEW_QUESTIONS,
  FETCH_QUESTIONS,
  DELETE_QUESTIONS
} from "../actions/current_game_questions_actions";

export default function(state = {}, action) {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case CREATE_NEW_QUESTIONS:
      return action.questions.data;
    case FETCH_QUESTIONS:
      return action.questions.data[0]; // for some reason the data was parsed into an array
    // s'all good, same overall result
    case DELETE_QUESTIONS:
      return newState;
    default:
      return state;
  }
}
