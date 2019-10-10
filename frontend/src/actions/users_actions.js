import * as UserUtil from '../util/users_util';

export const RECEIVE_CURRENT_USER_DATA = "RECEIVE_CURRENT_USER_DATA";

export const receiveCurrentUserData = user => ({
  type: RECEIVE_CURRENT_USER_DATA,
  user: user.data
});

export const fetchCurrentUserData = username => dispatch => (
  UserUtil.fetchCurrentUserData(username).then(user => (
    dispatch(receiveCurrentUserData(user))
  ), err => console.log(err))
);