import * as GameStatsUtil from '../util/game_stats_util';

export const RECEIVE_GAME_STATS = "RECEIVE_GAME_STATS";

export const receiveGameStats = stats => ({
  type: RECEIVE_GAME_STATS,
  stats: stats.data
});

export const fetchGameStats = () => dispatch => (
  GameStatsUtil.fetchGameData().then(stats => (
    dispatch(receiveGameStats(stats))
  ), err => console.log(err))
);