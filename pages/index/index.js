import React, { PureComponent } from 'react'
import IndexLayout from 'layouts/indexLayout'
import LoadingNotice from 'components/loading_notice';
import { connect } from 'react-redux';
import { getPosts, loadMorePosts } from 'actions/postsAction'
import { getSiteInfo } from 'actions/siteAction'
import Posts from '../../api/postsApi';

import SummaryContent from '../../components/summary_content';

class Index extends PureComponent {
  state = {
    index_posts: {
      meta: { status: '' },
      data: []
    },
    page: 1,
    per_page: 10
  }

  static async getInitialProps(ctx) {
    const { reduxStore, req } = ctx;

    const params = {
      _embed: null,
      page: 1,
      per_page: 10
    }
    
    if (req) {
      const siteInfo = reduxStore.dispatch(getSiteInfo());
      const posts = reduxStore.dispatch(getPosts(params));

      await Promise.all([
        siteInfo, posts
      ])
    } else {
      const posts = reduxStore.getState().posts;
      
      if (Object.keys(posts).length <= 0) {
        await reduxStore.dispatch(getPosts(params));
      }
    }

    return {}
  } 
  
  componentDidMount() {
    this.setState({
      index_posts: this.props.posts
    })
  }

  loadMore = async () => {
    const { dispatch } = this.props;
    const params = {
      _embed: null,
      page: this.state.page + 1,
      per_page: 10
    }
    
    const loadedPosts = await Posts.getPosts(params)
    const oldPosts = this.state.index_posts.data;
    oldPosts.push(loadedPosts);

    this.setState({
      index_posts: oldPosts,
      page: this.state.page + 1,
    })

    
    // await dispatch(loadMorePosts(params));
  }

  render() {
    const { site: { meta, data } } = this.props;
    const isStatusPostsExists = typeof this.state.index_posts !== 'undefined'
      && typeof this.state.index_posts.meta !== 'undefined' ? this.state.index_posts.meta.status : 'loading';

    
    return (
      <>
        <IndexLayout site={this.props.site}>
          {
            this.state.index_posts.data ? this.state.index_posts.data.map(post => {
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