import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <img
          className="logo"
          src="/images/logo.jpg"
          alt="로고이미지"
          onClick={() => this.props.history.push('/')}
        />
        <div className="navRightBar">
          <button className="navRightLanguageBtn">한국어</button>
          <button className="navRightWonBtn">KRW 대한민국 원(₩)</button>
          <button
            className="navLogin"
            onClick={() => this.props.history.push('/login')}
          >
            로그인
          </button>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
