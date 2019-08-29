import React, { Component } from 'react'
import Link from 'next/link'
import styles from './header.style'

export default class Header extends Component {
  render() {
    return (
      this.props.site && this.props.site.meta.status === 'success' ? 
        <div className="header">
          <div className="header-content">
            <h1 className="site-title">
              <Link href="/"><a>{this.props.site.data.name}</a></Link>
            </h1> 
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
        </div> : 'Loading...' 
    )
  }
}
