import React, { PureComponent } from 'react'
import HeadContent from '../../layouts/parts/headContent'
import IndexLayout from 'layouts/indexLayout'
import withReduxHOC from '../../components/withReduxHOC'
import LoadingNotice from '../../components/loading_notice';
import * as postActions from 'actions/postsAction'

class Index extends PureComponent {
  state = {
    meta: {
      status: 'loading',
      message: '',
    },
    data: [],
  }

  static async getInitialProps({ store }) {
    // await store.dispatch(getIndexPosts());

    return { }
  } 


  async componentDidMount() {
    this.props.getIndexPosts()
  }

  render() {
    const isStatusExists = typeof this.props.posts !== 'undefined'
      && typeof this.props.posts.meta !== 'undefined' ? this.props.posts.meta.status : 'loading';

    return (
      <>
        <HeadContent title="Welcome to my site">
          <meta name="keywords" content="React,Next,JavaScript" />
        </HeadContent>
        
        <IndexLayout>
          <h2>Index Page</h2>
          <LoadingNotice status={isStatusExists}>
            <p>{JSON.stringify(this.props.posts)}</p>
          </LoadingNotice>
        </IndexLayout>
      </>
    )
  }
}

/* const mapStateToProps = ({ posts }) => {
  return { posts: posts }
} */

const mapStateToProps = (state) => {
  return {  
    ...state
  }
}

export default withReduxHOC(Index, mapStateToProps, postActions);