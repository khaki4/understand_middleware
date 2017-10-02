import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter, incrementAsync } from '../reducers/count';
import { getPostPending, getPostSuccess, getPostFailure, getPost } from '../reducers/post';


class Counter extends Component {
  componentDidMount() {
    const { count } = this.props
    this.asyncGetPost(count.count)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.count.count !== nextProps.count.count) {
      this.asyncGetPost(nextProps.count.count)
    }
  }
  
  asyncGetPost = async (postId) => {
    const { getPost } = this.props
    try {
      await getPost(postId)
      console.log('요청이 완료된 다음에 실행됨')
    } catch (e) {
      console.log('에러가 발생!', e.message)
    }
  }
  
  handleIncCounter = (evt) => {
    evt.preventDefault()
    this.props.increaseCounter()
  }
  handleDecCounter = (evt) => {
    evt.preventDefault()
    this.props.decreaseCounter()
  }
  render() {
    const { count, post, error, loading } = this.props
    return (
      <div>
        <span>{this.props.count.count}</span>
        <div>
          <button onClick={this.handleIncCounter}>+</button>
          <button onClick={this.handleDecCounter}>-</button>
          { loading && <h2>로딩중...</h2> }
          {
            error
              ? <h1>에러발생</h1>
              : (
                <div>
                  <h1>{post.title}</h1>
                  <p>{post.title}</p>
                </div>
              )
          }
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {count: state.count, post: state.post.data, loading: state.post.pending, error: state.post.error}
  },
  {increaseCounter, decreaseCounter, incrementAsync, getPost, getPostPending, getPostSuccess, getPostFailure}
)(Counter)