import React from 'react'
import PropTypes from 'prop-types'
import Countdown from './Countdown'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="countdown-container">
            <Countdown/>
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
                {/* eslint-disable-next-line */}
                <li><a href="true" onClick={() => { props.onOpenArticle('rsvp') }}>RSVP</a></li>
                 {/* eslint-disable-next-line */}
                <li><a href="true" onClick={() => { props.onOpenArticle('where') }}>Where</a></li>
                 {/* eslint-disable-next-line */}
                <li><a href="true" onClick={() => { props.onOpenArticle('about') }}>Lodging</a></li>
                 {/* eslint-disable-next-line */}
                <li><a href="true" onClick={() => { props.onOpenArticle('gifts') }}>Gifts</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
