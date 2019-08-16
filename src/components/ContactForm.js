import React, { Component } from 'react';
import Loading from './Loading';
import CompletedForm from './CompletedForm';
import ErrorForm from './ErrorForm';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            complete: false,
            reset: false,
            name: "",
            attending: "",
            message: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    //   Handle Changes
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    //   Handle Submition -> Trigger AJAX
    handleSubmit(event) {
        const { name, attending, message } = this.state;
        const formObject = {
            'name': name,
            'attending': attending,
            'message': message,
        };
        console.log(formObject);

        this.sendFormWithFetch(formObject);

        event.preventDefault();
    }

    handleReset(event) {
        this.setState({ error: false });
    }

    render() {
        const { name, attending, message } = this.state;
        return (
            <React.Fragment>
                <form
                    className="ContactForm"
                    method="POST"
                    name="rsvp"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    onSubmit={this.handleSubmit}>
                    <input type="hidden" name="bot-field" />
                    {this.state.loading ? (
                        <Loading />
                    ) : this.state.complete ? (
                        <CompletedForm />
                    ) : this.state.error ? (
                        <ErrorForm handleReset={this.handleReset} />
                    ) : (
                            <div>
                                <div className="field half first">
                                    <label htmlFor="name">Family Name *</label>
                                    <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={this.handleChange}
                                    required />
                                </div>
                                <div className="field half">
                                    <label htmlFor="attending">How many will attend? *</label>
                                    <input
                                    type="text"
                                    name="attending"
                                    id="attending"
                                    value={attending}
                                    onChange={this.handleChange}
                                    required  />
                                </div>
                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    value={message}
                                    onChange={this.handleChange}
                                    ></textarea>
                                </div>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" className="special" /></li>
                                    <li><input type="reset" value="Reset" /></li>
                                </ul>
                            </div>
                        )}
                </form>

            </React.Fragment>
        )
    }

    sendFormWithFetch(formObject) {
        this.setState({ loading: true })
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "rsvp", ...formObject })
        })
            .then((result) => {
                console.log("Success!");
                console.log(result);

                setTimeout(function () {
                    this.setState({
                        loading: false,
                        complete: true,
                    })
                }
                    .bind(this),
                    2000)
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    loading: false,
                    complete: false,
                    error: true,
                })
            });
    }
}


export default ContactForm;