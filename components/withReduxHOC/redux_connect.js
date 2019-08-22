import React, { PureComponent } from 'react'
import { connect } from "react-redux"

export default class Connect extends PureComponent {
  render() {
    const {
      mapStateToProps,
      mapDispatchToProps,
      mergeProps,
      options,
      children
    } = this.props;

    return React.createElement(
      connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(children)
    );
  }
}
