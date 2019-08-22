import React, { PureComponent } from 'react'
import Header from '../layouts/parts/header'

export default class IndexLayout extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Header />

        <div className="content">
          { this.props.children }
        </div>
      </div>
    )
  }
}
