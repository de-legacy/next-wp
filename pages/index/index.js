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
    is_post_loading: false,
    page: 1,
    per_page: 10
  }

  static async getInitialProps(ctx) {
    const { reduxStore, req } = ctx;

    if (req) {
      const siteInfo = reduxStore.dispatch(getSiteInfo());

      await Promise.all([
        siteInfo
      ])
    } 

    return {}
  } 

  componentDidMount() {
    const params = {
      _embed: null,
      page: 1,
      per_page: 10
    }

    this.props.dispatch(getPosts(params))
  }


  loadMore = () => {
    let nextPage = this.state.page + 1;

    this.setState({
      page: nextPage,
    })

    const params = {
      _embed: null,
      page: nextPage,
      per_page: this.state.per_page
    }

    this.props.dispatch(loadMorePosts(params));
  }

  render() {
    return (
      <>
        <IndexLayout site={this.props.site}>
          {
            this.props.posts.meta.status === 'loading' && this.props.posts.data.length <= 0 ? 'Loading...' : 
             <>
              {
                this.props.posts.data.map(post => {
                  return (
                    <SummaryContent key={post.id} {...post} />
                  )
                })
              }

              {
                this.props.posts.meta.status === 'loading' && this.props.posts.data.length > 0 ? 'Loading...' :
                  <div className="loadmore-wrapper">
                    <button onClick={this.loadMore}>Load More</button>
                  </div>
              }
             </>
          }
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