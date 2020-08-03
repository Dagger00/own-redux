import {CHANGE_BACK_COLOR, CHANGE_LOGO_COLOR, RESET_BACK_COLOR, RESET_LOGO_COLOR} from "./constants";

export const changeLogoColor = () => ({
  type: CHANGE_LOGO_COLOR,
})

export const resetLogoColor = () => ({
  type: RESET_LOGO_COLOR,
})

export const changeBackColor = () => ({
  type: CHANGE_BACK_COLOR,
})

export const resetBackColor = () => ({
  type: RESET_BACK_COLOR,
})
