import React, { Component } from 'react'
import { connect } from "react-redux"
import { compose, bindActionCreators } from 'redux'

const withReduxHOC = (WrappedComponent, mapStateToProps, actionCreators) => {
  class ReduxContainer extends Component {
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

  return connect(mapStateToProps)(ReduxContainer);
}

export default withReduxHOC;