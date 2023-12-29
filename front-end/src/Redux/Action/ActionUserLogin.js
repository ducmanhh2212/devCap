import * as types from "../Contants/ActionTypeLogin"

export function setTokenInfo(token) {
  return {
    type: types.TOKEN_INFO,
    payload: token
  };
}

export function setUserLoginInfo(user) {
  return {
    type: types.USER_LOGIN_INFO,
    payload: user
  };
}

export function setRememberMeInfo(isRememberMe) {
  return {
    type: types.REMEMBER_ME_INFO,
    payload: isRememberMe
  };
}