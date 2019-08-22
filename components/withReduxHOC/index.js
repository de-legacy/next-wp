import React, { Component } from 'react'
import { connect } from "react-redux"
import { compose, bindActionCreators } from 'redux'
import * as actionCreators from 'actions/postsAction'

const withReduxHOC = (WrappedComponent) => {
  return class extends Component {
    static async getInitialProps(ctx) {
      const pageProps = WrappedComponent.getInitialProps ? await WrappedComponent.getInitialProps(ctx) : {}

      return { ...pageProps }
    }

    constructor(props) {
      super(props)
      const { dispatch } = props
      this.boundActionCreators = bindActionCreators(actionCreators, dispatch)
    }

    render() {
      return (
        <WrappedComponent 
          {...this.props}
          {...this.boundActionCreators} />
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default compose(connect(mapStateToProps), withReduxHOC);