import React, { PureComponent } from 'react'
import { getPosts } from 'actions/postsAction'
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
          mapDispatchToProps={{ getPosts }}
        >
          {({ getPosts, posts }) => (
            <Blog getPosts={getPosts} posts={posts} />
          )}
        </Connect>
      </>
    )
  }
}

export default About;