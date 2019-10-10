import { RECEIVE_GAME_STATS } from '../actions/game_stats_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAME_STATS:
      let stats = action.stats;
      return stats;
    default:
      return state;
  }
}