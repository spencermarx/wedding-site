import React from 'react'
import GoogleMap from 'google-map-react'
import heartPin from '../images/heart-pin.png'

const Pin = ({ text }) => (
    <div style={{
        backgroundImage: heartPin,
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

class Map extends React.Component {
    static defaultProps = {
        center: { lat: 41.9393938, lng: -70.625786 },
        zoom: 11
    };

    render() {
        return (
            <GoogleMap
                bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <Pin
                    lat={41.9393938}
                    lng={-70.625786}
                    text={'Plimouth Plantation'}
                />
            </GoogleMap>
        );
    }
}

export default Map