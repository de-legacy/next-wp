import React, { PureComponent } from 'react'
import HeadContent from 'layouts/parts/headContent'
import IndexLayout from 'layouts/indexLayout'
import LoadingNotice from 'components/loading_notice';
import { connect } from 'react-redux';
import { getPosts } from 'actions/postsAction'
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

  static async getInitialProps({ store }) {
    const params = {
      _embed : null,
      page: 1,
      per_page : 10
    }
    await store.dispatch(getSiteInfo());
    await store.dispatch(getPosts(params));

    return { }
  } 


  async componentDidMount() {
    // this.props.getPosts()
  }

  render() {
    const { site: { meta, data } } = this.props;
    const isStatusExists = typeof this.props.posts !== 'undefined'
      && typeof this.props.posts.meta !== 'undefined' ? this.props.posts.meta.status : 'loading';

    return (
      <>
        <HeadContent title={data.name}>
          <meta name="keywords" content="React,Next,JavaScript" />
        </HeadContent>
        
        <IndexLayout {...this.props}>
          {
            this.props.posts.data.map(post => {
              return (
                <SummaryContent {...post} />
              )
            })
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