import React, { PureComponent } from 'react'
import IndexLayout from 'layouts/indexLayout'
import { connect } from 'react-redux'
import { getSiteInfo } from 'actions/siteAction'
import Posts from '../../api/postsApi';
import { Parser as HtmlToReactParser } from 'html-to-react';

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

    if (req) {
      await reduxStore.dispatch(getSiteInfo());
    }

    return { slug: slug }
  }

  componentDidMount() {
    const params = {
      slug: this.props.slug
    }

    Posts.getPosts(params).then(response => {
      this.setState({
        post: response
      })
    })
  }

  render() {
    const { post: { meta, data: [{ title, content } ] } } = this.state;
    
    return (
      <IndexLayout {...this.props}>
        <div className="single">
          {
            meta.status === 'loading' ? 'Loading...' : 
              <>
                <h1 className="post-title">{ title }</h1>
                { htmlToReactParser.parse(content) }
              </>
          } 
        </div>
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