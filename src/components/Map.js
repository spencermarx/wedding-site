import React from 'react'
import GoogleMap from 'google-map-react'
import Pin from './Pin'

class Map extends React.Component {
    static defaultProps = {
        center: { lat: 41.938115, lng: -70.625427 },
        zoom: 11
    };

    render() {
        return (
            <GoogleMap
                bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <Pin
                    lat={41.938115}
                    lng={-70.625427}
                    name='Plimouth Plantation'
                    color='#f17b7b'
                />

            </GoogleMap>
        );
    }
}

export default Map