import React, { Component } from 'react';


class CompletedForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="CompletedForm">
                    <h5 className="CompletedForm-Message">Message Sent</h5>
                    <p className="CompletedForm-SubMessage">We'll be in touch with you soon!</p>
                    <svg className="CompletedForm-Checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="CompletedForm-Checkmark-Circle" cx="26" cy="26" r="25" fill="none"/><path className="CompletedForm-Checkmark-Check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                </div>
            </React.Fragment>
        )
    }
}


export default CompletedForm;