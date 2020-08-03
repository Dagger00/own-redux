const increment = () => ({
  type: INCREMENT
})

const changeColor = () => ({
  type: CHANGE_LOGO_COLOR,
  payload: getRandomColor()
})

const resetColor = () => ({
  type: RESET_LOGO_COLOR,
})
