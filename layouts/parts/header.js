import React, { Component } from 'react'
import Link from 'next/link'
import styles from './header.style'

export default class Header extends Component {
  state = {
    site: {
      meta: {
        status: 'loading'
      },
      data: []
    }
  }

  componentDidMount() {
    const site = typeof localStorage.getItem('siteData') === 'undefined' || localStorage.getItem('siteData') === null ?
      this.props.site : JSON.parse(localStorage.getItem('siteData'));

    this.setState({
      site: site
    })
  }

  render() {
    const site = this.state.site.meta.status === 'success' ? this.state.site : this.props.site ;

    return (
      <>
        {
          site && site.meta.status === 'success' ? 
            <div className="header">
              <div className="header-content">
                <h1 className="site-title">
                  <Link href="/"><a>{site.data.name}</a></Link>
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
        }
      </>
    )
  }
}
