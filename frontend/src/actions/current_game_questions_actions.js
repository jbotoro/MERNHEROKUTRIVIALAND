import * as CurrentQuestions from "../util/current_game_questions_util";
import { create } from "domain";

export const CREATE_NEW_QUESTIONS = "CREATE_NEW_QUESTIONS";
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const DELETE_QUESTIONS = "DELETE_QUESTIONS";

export const createQuestions = questions => ({
  type: CREATE_NEW_QUESTIONS,
  questions
});

export const fetchQuestions = questions => ({
  type: FETCH_QUESTIONS,
  questions
});

export const deleteQuestions = () => ({
  type: DELETE_QUESTIONS,
  delete: "delete"
});

//THUNK
export const createCurrentQuestions = questionsPayload => dispatch =>
  CurrentQuestions.createQuestions(
    questionsPayload
  ).then(backendQuestionsPayload =>
    dispatch(createQuestions(backendQuestionsPayload))
  );

export const newPlayerFetchQuestions = roomId => dispatch =>
  CurrentQuestions.fetchCurrentGameQuestions(roomId).then(questionsPayload => {
    // console.log("QUESTION PAYLOAD FROM USER JOINING:  ", questionsPayload);
    dispatch(fetchQuestions(questionsPayload));
  });

export const deleteAllGameQuestions = roomId => dispatch =>
  CurrentQuestions.deleteCurrentGameQuestions(roomId).then(() =>
    dispatch(deleteQuestions())
  );
