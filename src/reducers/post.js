import axios from 'axios';


const getPostApi = (postId) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPostPending = () => ({type: GET_POST_PENDING})
export const getPostSuccess = (response) => ({type: GET_POST_SUCCESS, payload: response})
export const getPostFailure = (error) => ({type: GET_POST_FAILURE, payload: error})

export const getPost = (postId) => (dispatch) => {
  dispatch(getPostPending())
  
  return getPostApi(postId)
    .then(response => {
      dispatch(getPostSuccess(response))
    })
    .catch(error => {
      dispatch(getPostFailure(error))
      throw(error)
    })
}

const iniState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: ''
  }
}

export default (state = iniState, action) => {
  switch (action.type) {
    case GET_POST_PENDING:
      return {
        ...state,
        pending: true,
        error: false
      }
    case GET_POST_SUCCESS:
      const { title, body } = action.payload.data
      return {
        ...state,
        pending: false,
        data: {
          title, body
        }
      }
      case GET_POST_FAILURE:
        return {
          ...state,
          pending: false,
          error: true
        }
    default:
      return state
  }
}

