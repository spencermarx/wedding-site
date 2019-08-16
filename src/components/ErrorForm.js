import React, { Component } from 'react';


class ErrorForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ErrorForm">
                    <h5 className="ErrorForm-Message">Something Went Wrong!</h5>
                    <p className="ErrorForm-SubMessage">Try submitting the form again or contact us by&nbsp;
                     <a className="ErrorForm-Link" href="mailto:mariadelosangelesheld@gmail.com,spencer.s.marx@gmail.com?subject=Wedding%20RSVP👰🤵">email</a>
                    </p>
                    <svg class="ErrorForm-Errormark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle class="ErrorForm-Errormark-Circle" cx="26" cy="26" r="25" fill="none"></circle>
                        <path class="ErrorForm-Errormark-X" fill="none" d="M16 16 36 36 M36 16 16 36"></path>
                    </svg>
                    <button
                        className="ErrorForm-Button"
                        onClick={this.props.handleReset}>
                        Try again</button>

                </div>
            </React.Fragment>
        )
    }
}


export default ErrorForm;