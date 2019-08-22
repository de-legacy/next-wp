import React, { PureComponent } from 'react'
import { getIndexPosts } from 'actions/postsAction'
import Connect from 'components/withReduxHOC/redux_connect'
import Blog from '../blog';

class About extends PureComponent {
  state = {
    meta: {
      status: 'loading',
      message: '',
    },
    data: [],
  }

  static async getInitialProps({ store }) {
    return {}
  }


  componentDidMount() {

  }

  render() {
    return (
      <>
        <Connect
          mapStateToProps={({ posts }) => ({ posts })}
          mapDispatchToProps={{ getIndexPosts }}
        >
          {({ getIndexPosts, posts }) => (
            <Blog getPosts={getIndexPosts} posts={posts} />
          )}
        </Connect>
      </>
    )
  }
}

export default About;