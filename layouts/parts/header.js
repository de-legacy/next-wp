import React, { Component } from 'react'
import Link from 'next/link'
import styles from './header.style'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          {
            this.props.site && this.props.site.meta.status === 'success' ? 
              <h1 className="site-title">
                <Link href="/"><a>{this.props.site.data.name}</a></Link>
              </h1> : 
              'Loading...'
          }
        </div>

        <nav className="top-menu flat-list">
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
          </ul>
        </nav>

        <style jsx>
          {styles}
        </style>
      </div>
    )
  }
}
