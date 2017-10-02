import { createStore, applyMiddleware, combineReducers } from 'redux';
import countReducer from './reducers/count';
import post from './reducers/post';

import loggerMiddleware from './lib/loggerMiddleware'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

const reducer = combineReducers({
  count: countReducer,
  post
})

// 미들웨어가 여러개인경우에는 파라미터로 여러개를 전달해주면 됩니다. 예: applyMiddleware(a, b, c)
// 미들웨어의 순서는 여기서 전달한 파라미터의 순서대로 지정됩니다.

/* 로그 미들웨어를 생성 할 때 설정을 커스터마이징 할 수 있습니다.
   https://github.com/evgenyrodionov/redux-logger#options
*/
const logger = createLogger()
const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store