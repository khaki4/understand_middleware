export const COUNT_INCREASE = 'COUNT_INCREASE'
export const COUNT_DECRESE = 'COUNT_DECRESE'

export const increaseCounter = () => ({ type: COUNT_INCREASE })
export const decreaseCounter = () => ({ type: COUNT_DECRESE })

export const incrementAsync = () => (dispatch, getState) => {

  const { count } = getState()

  if (count.count % 2 === 0) {
    return
  }

  dispatch(increaseCounter())

}

const initState = {
  count: 1
}

export default (state = initState, action) => {
  switch (action.type) {
    case COUNT_INCREASE:
      return {
        ...state,
        count: state.count + 1
      }
    case COUNT_DECRESE:
      return {
        ...state,
        count: state.count -1
      }
    default:
      return state
  }
}