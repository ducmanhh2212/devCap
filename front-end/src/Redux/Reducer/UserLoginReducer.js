import Storage from "Storage/Storage";
import * as types from "../Contants/ActionTypeLogin";

const initialState = {
  token: Storage.getToken(),
  userInfo: Storage.getUserInfo(),
  isRememberMe: Storage.isRememberMe()
};

export function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.USER_LOGIN_INFO:
      return {
        ...state,
        userInfo: actions.payload
      };
    case types.TOKEN_INFO:
      return {
        ...state,
        token: actions.payload
      };
    case types.REMEMBER_ME_INFO:
      return {
        ...state,
        isRememberMe: actions.payload
      };
    default:
      return state;
  }
}