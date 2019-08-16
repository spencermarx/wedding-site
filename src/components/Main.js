import React from 'react'
import PropTypes from 'prop-types'
import ContactForm from './ContactForm'
import Map from './Map'
import HotelOptions from './HotelOptions'

import imageMoney from '../images/imageMoney.jpg'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en',
    }
  }
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="rsvp" className={`${this.props.article === 'rsvp' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">RSVP</h2>
          <ContactForm/>
          {close}
        </article>

        <article id="where" className={`${this.props.article === 'where' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Where</h2>
          <p>We will be hosting both the ceremony and reception at the beautiful Plimouth Plantation. Autumn will have arrived, so be sure to bring a jacket!</p>
          <div style={{ width: '100%', height: '400px' }}>
            <Map />
          </div>

          {close}
        </article>

        <article id="lodging" className={`${this.props.article === 'lodging' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Lodging</h2>
          <p>Here is a list of affordable hotels and other accommodations close by the wedding venue. Feel free to check Airbnbs as well! We recommend that you book as soon as possible so you get a better rate. If you have any other questions, don't hesitate to reach out!</p>
          <HotelOptions />
          {close}
        </article>

        <article id="gifts" className={`${this.props.article === 'gifts' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Gifts</h2>
          <span className="image main"><img src={imageMoney} alt="" /></span>
          <p>
            Please do not feel obliged to buy us a gift; all that we are expecting is you. If you would like to give something, a contribution towards our future would be greatly appreciated! Thank you!
          </p>
          <p style={{ fontWeight: '600' }}> – Angie and Spencer Marx</p>
          <p style={{ textAlign: 'center', borderTop: 'solid 1px white', margin: '0', paddingTop: '1rem' }}>37 Crescent Ave</p>
          <p style={{ textAlign: 'center', borderBottom: 'solid 1px white', paddingBottom: '1rem' }}>Plymouth, MA 02360</p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main