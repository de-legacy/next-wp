import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="site-title">Septian Fujianto</h1>

        <nav className="menu">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
