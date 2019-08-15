import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-heart"></span>
        </div>
        <div className="content">
            <div className="inner">
                <p>We're getting married!</p>
                <h1>Angeles + Spencer</h1>
                <p>– November 3rd, 2019 –</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('rsvp') }}>RSVP</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('where') }}>Where</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>Lodging</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('gifts') }}>Gifts</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
