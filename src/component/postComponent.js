import React from 'react'
import { fetchPosts } from '../store/redux/action'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const PostsComponent = (props) => {
  const { fetchPosts } = props
  const onClick = () => {
    fetchPosts()
  }

  const { posts } = props.data

  return (
    <div className="app-container">
      <div className="posts-container">
        {posts.length > 0 &&
          posts.slice(0, 10).map((post, i) => {
            return (
              <div key={i} className="each-post">
                <b>Post#{i.toString()}</b> - {post.title}
              </div>
            )
          })}
      </div>
      <div className="posts-button-container">
        <div className="button_cont" align="center">
          <button className="example_a" onClick={onClick}>
            Fetch Posts
          </button>
        </div>
      </div>
    </div>
  )
}

const structuredSelector = createStructuredSelector({
  data: (state) => state.posts,
})

const mapDispatchToProps = { fetchPosts }
export default connect(
  structuredSelector,
  mapDispatchToProps,
)(PostsComponent)
