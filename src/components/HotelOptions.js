import React from 'react'

class HotelOptions extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = (url) => {
        return (e) => {
            e.preventDefault();
            window.open(url, '_blank');
        }
    }

    render() {
        const hotels = [
            {
                hotelName: 'Blue Spruce Motel',
                price: '$',
                distance: '4.8 miles',
                hotelURL: 'http://www.bluespruce-motel.com/',
            },
            {
                hotelName: 'Blue Anchor Guesthouse',
                price: '$',
                distance: '2.4 miles',
                hotelURL: 'https://www.blueanchorguesthouse.com/',
            },
            {
                hotelName: 'Pilgrim Sands On Long Beach',
                price: '$$',
                distance: '0.7 miles',
                hotelURL: 'http://blah.com',
            },
            {
                hotelName: 'Comfort Inn',
                price: '$$',
                distance: '4.5 miles',
                hotelURL: 'http://www.plymouthcomfortinn.com/en-us',
            },
            {
                hotelName: 'Hilton Garden Inn',
                price: '$$',
                distance: '2.6 miles',
                hotelURL: 'https://hiltongardeninn3.hilton.com/en/hotels/massachusetts/hilton-garden-inn-plymouth-PYMMAGI/index.html',
            },
            {
                hotelName: 'Best Western Plus',
                price: '$$$',
                distance: '5.6 miles',
                hotelURL: 'https://www.bestwestern.com/en_US/book/plymouth/hotel-rooms/best-western-plus-cold-spring/propertyCode.22050.html?iata=00170260&ssob=PSPBM0304G&cid=PSPBM0304G:google:US+%257C+Properties+%257C+Exact:best+western+plus+cold+spring+plymouth&ds_rl=1260743&ds_rl=1260746&ds_rl=1265313&gclid=Cj0KCQjwhdTqBRDNARIsABsOl9-f0udKq2vXQ3cesmvQyC8OaVxsgC_3102GMPx6HkoGC8oBYhA7V9MaAoADEALw_wcB&gclsrc=aw.ds',
            },
        ]
        return (
            <ul className="HotelOptions">
                {hotels.map((hotel) =>
                    <li className="HotelOptions-Item" key={hotel.hotelName}>
                        <div className="HotelOptions-Hotel-Name">{hotel.hotelName}</div>
                        <div className="HotelOptions-Hotel-Price">{hotel.price}</div>
                        <div className="HotelOptions-Hotel-Price">{hotel.distance}</div>
                        <button className="HotelOptions-Hotel-Button" onClick={this.handleClick(hotel.hotelURL)}>View Hotel</button>
                    </li>
                )}
            </ul>
        )
    }
}

export default HotelOptions