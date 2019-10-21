import React, { PureComponent } from 'react'
import IndexLayout from 'layouts/indexLayout'
import { connect } from 'react-redux'
import { getSiteInfo } from 'actions/siteAction'
import Posts from '../../api/postsApi';
import { Parser as HtmlToReactParser } from 'html-to-react';
import styles from './single.style';

const htmlToReactParser = new HtmlToReactParser();


class Single extends PureComponent {
  state = {
    post: {
      meta: {
        status: 'loading'
      },
      data: [{
        title: '',
        content: ''
      }]
    }
  }

  static async getInitialProps({ query, reduxStore, req }) {
    const slug = query.slug;
    let post = {};

    if (req) {
      await reduxStore.dispatch(getSiteInfo());
      post = await Posts.getPosts({ slug: query.slug });
    }

    return { slug: slug, post: post }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (Object.keys(nextProps.post).length > 0) {
      return { ...prevState, post: nextProps.post };
    }

    return prevState;
  }
 

  componentDidMount() {
    const that = this;

    Posts.getPosts({ slug: this.props.slug }).then((response) => {
      that.setState({
        post: response
      })
    });
  }

  render() {
    const { post: { meta, data: [{ title, content } ] } } = this.state;
    
    return (
      <IndexLayout {...this.props}>
        <div className="single">
          {
            meta.status === 'loading' ? 'Loading...' : 
              <>
                <h1 className="single-title">{ title }</h1>
                { htmlToReactParser.parse(content) }
              </>
          } 
        </div>

        <style jsx>
          {styles}
        </style>
      </IndexLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(Single)