import React, { Component } from 'react';


class Loading extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Loading">
                    <h5 className="Loading-Message">Sending Your RSVP</h5>
                    <p className="Loading-SubMessage">Hang on! Your RSVP is on its way!</p>
                    <div className="Loading-Balls">
                        <div className="Loading-Balls-Bounce1"></div>
                        <div className="Loading-Balls-Bounce2"></div>
                        <div className="Loading-Balls-Bounce3"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Loading;