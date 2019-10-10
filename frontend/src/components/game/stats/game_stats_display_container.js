/*

import React from 'react';
import { connect } from 'react-redux';

import GameStatsDisplay from './game_stats_display';
import { fetchGameStats } from '../../../actions/game_stats_actions';

const mapStateToProps = state => {
  let stats = state.entities.gameStats;
  return {
    stats
  }
};

const mapDispatchToProps = dispatch => {

  return {
    fetchGameStats: () => dispatch(fetchGameStats())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameStatsDisplay);

*/