import React, { PureComponent } from 'react'
import IndexLayout from 'layouts/indexLayout'
import { connect } from 'react-redux'
import { getSiteInfo } from 'actions/siteAction'

class Single extends PureComponent {
  static async getInitialProps({ query, store }) {
    const slug = query.slug;

    return { slug: slug }
  }

  componentDidMount() {
    // this.props.dispatch(getSiteInfo());
  }

  render() {
    const { site: { meta, data } } = this.props;

    return (
      <IndexLayout {...this.props}>
        <div>
          <h2>{this.props.slug}</h2>
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