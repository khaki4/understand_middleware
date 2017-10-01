/**
   * next는 뭘까?
   *
   * store.dispatch랑 비슷하다...
   * 하지만 다르다!!!
   *
   * store.dispatch(action)는 프로세스를 처음부터 하는 것이고,
   * next(action)은 그 다음 미들웨어 처리 후 리듀서로
   */
const loggerMiddleware = store => next => action => {
  // 현재 스토어 상태값 기록
  console.log('현재 상태', store.getState())
  // 액션 기록
  console.log('액션', action)

  // 액션을 다음 미들웨어, 혹은 리듀서로 넘김
  const result = next(action)

  // 액션 처리 후의 스토어 상태 기록
  console.log('다음 상태', store.getState())
  console.log('\n')

  return result
}

export default loggerMiddleware