import React, { Component } from 'react'
import './index.scss'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <img width="30" height="30" src="./assets/logo.png" /><h1>Reploy</h1>
        </div>
        <div className="subnav">
          <a href="#features">Features</a>
          <a href="/docs/">Docs</a>
          <a href="#team">Team</a>
          <a href="https://app.reploy.io/signup">Sign up</a>
        </div>
      </div>
    );
  }
}

export default Nav
