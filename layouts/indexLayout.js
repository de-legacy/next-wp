import React, { PureComponent } from 'react'
import Header from '../layouts/parts/header'
import globalStyles from '../styles/global.style.js'
import HeadContent from 'layouts/parts/headContent'

export default class IndexLayout extends PureComponent {
  render() {
    const { site: { meta, data } } = this.props;

    return (
      <div className="wrapper">
        <HeadContent title={data.name}>
          <meta name="keywords" content="React,Next,JavaScript" />
        </HeadContent>

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
