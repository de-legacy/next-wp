import React, { PureComponent } from 'react'
import { getIndexPosts } from 'actions/postsAction'

import HeadContent from '../../layouts/parts/headContent'
import IndexLayout from 'layouts/indexLayout'
import withReduxHOC from '../../components/withReduxHOC'
import LoadingNotice from '../../components/loading_notice';
import * as actionCreators from 'actions/postsAction'

class Index extends PureComponent {
  state = {
    meta: {
      status: 'loading',
      message: '',
    },
    data: [],
  }

  static async getInitialProps({ store }) {
    await store.dispatch(getIndexPosts());

    return { }
  } 


  componentDidMount() {
    // this.props.getIndexPosts()
  }

  render() {
    return (
      <>
        <HeadContent title="Welcome to my site">
          <meta name="keywords" content="React,Next,JavaScript" />
        </HeadContent>
        
        <IndexLayout>
          <h2>Indexingz</h2>

          <LoadingNotice status={this.props.posts.meta ? this.props.posts.meta.status : 'loading'}>
            <p>{JSON.stringify(this.props.posts)}</p>
          </LoadingNotice>
        </IndexLayout>
      </>
    )
  }
}

export default withReduxHOC(Index, actionCreators);

/* const withLoading = (key) => WrappedComponent => {
  return class extends PureComponent {
    static async getInitialProps(ctx) {
      const pageProps = WrappedComponent.getInitialProps ? await WrappedComponent.getInitialProps(ctx) : {}

      return { ...pageProps }
    }

    render() {
      return (
        <>
          {this.props[key] && this.props[key].meta.status === 'loading' && <p>Loading...</p>}

          <WrappedComponent  {...this.props} />
        </>
      )
    }
  }
} */