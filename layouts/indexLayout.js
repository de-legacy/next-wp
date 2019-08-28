import React, { PureComponent } from 'react'
import Header from '../layouts/parts/header'
import globalStyles from '../styles/global.style.js'

export default class IndexLayout extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Header {...this.props} />

        <div className="content">
          { this.props.children }
        </div>
        
        <style jsx global>
          { globalStyles }
        </style>
      </div>
    )
  }
}
