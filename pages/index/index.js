import React, { PureComponent } from 'react'
import IndexLayout from 'layouts/indexLayout'
import LoadingNotice from 'components/loading_notice';
import { connect } from 'react-redux';
import { getPosts, loadMorePosts } from 'actions/postsAction'
import { getSiteInfo } from 'actions/siteAction'
import Link from 'next/link'

import SummaryContent from '../../components/summary_content';

class Index extends PureComponent {
  state = {
    meta: {
      status: 'loading',
      message: '',
    },
    data: [],
    page: 1,
    per_page: 10
  }

  static async getInitialProps({ store, res }) {
    const params = {
      _embed: null,
      page: 1,
      per_page: 10
    }
    
    if (res) {
      const siteInfo = store.dispatch(getSiteInfo());
      const posts = store.dispatch(getPosts(params));

      await Promise.all([
        siteInfo, posts
      ])
    }

    return { }
  } 

  componentDidMount() {
    // const params = {
    //   _embed: null,
    //   page: 1,
    //   per_page: 10
    // }
    // const siteInfo = this.props.dispatch(getSiteInfo());
    // const posts = this.props.dispatch(getPosts(params));

    // Promise.all([
    //   siteInfo, posts
    // ])
  }

  loadMore = async () => {
    const { dispatch } = this.props;
    const params = {
      _embed: null,
      page: this.state.page + 1,
      per_page: 10
    }

    this.setState({
      page: this.state.page + 1,
    })

    await dispatch(loadMorePosts(params));
  }

  render() {
    const { site: { meta, data } } = this.props;
    const isStatusPostsExists = typeof this.props.posts !== 'undefined'
      && typeof this.props.posts.meta !== 'undefined' ? this.props.posts.meta.status : 'loading';

    return (
      <>
        <IndexLayout {...this.props}>
          {
            this.props.posts.data ? this.props.posts.data.map(post => {
              return (
                <SummaryContent key={post.id} {...post} />
              )
            }) : 'Loading...'
          }

          <LoadingNotice status={isStatusPostsExists}>
            <button onClick={this.loadMore}>Load More</button>
          </LoadingNotice>
        </IndexLayout>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {  
    ...state
  }
}

export default connect(mapStateToProps, null)(Index);