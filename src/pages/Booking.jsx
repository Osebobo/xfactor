import { useState, useEffect } from 'react'
import { useSendBooking } from '../component/hooks'
import image from "../assets/images/slider/slide-2.jpg"
import axios from 'axios'
import { Helmet } from "react-helmet";

export default function Booking({ history }) {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setisSuccess] = useState(false)
    const [message, setmessage] = useState(false)
    const [validationError, setvalidationError] = useState(false)
    const [requestError, setRequestError] = useState()
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);
    const normalizeContactForm7Response = (response) => {
        // The other possible statuses are different kind of errors
        const isSuccess = response.status === 'mail_sent';
        // A message is provided for all statuses
        const message = response.message;
        const validationError = isSuccess
            ? {}
            : // We transform an array of objects into an object
            Object.fromEntries(
                response.invalid_fields.map((error) => {
                    // Extracts the part after "cf7-form-control-wrap"
                    const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1];

                    return [key, error.message];
                })
            );

        return {
            isSuccess,
            message,
            validationError,
        };
    };
    const formSubmissionHandler = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const formElement = event.target,
            { action, method } = formElement,
            body = new FormData(formElement);

        fetch(action, {
            method,
            body
        })
            .then((response) => response.json())
            .then((response) => {
                setIsLoading(false)

                const {
                    isSuccess,
                    message,
                    validationError
                } = normalizeContactForm7Response(response);
                setisSuccess(isSuccess)
                setmessage(message)
                setvalidationError(validationError)
            })
            .catch((error) => {
                setRequestError("An error occured")
            });
    };

    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Booking - X Factor Productions Ltd</title>
                <link rel="canonical" href="http://xfactorproductions.ng/booking" />
            </Helmet>
            <section className="page-header services-header" data-parallax="scroll" style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center" style={{ color: '#fff' }}>  Book a Service </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="title text-center col-md-6 col-xs-12">
                            <h2>How can we be of service</h2>
                        </div>
                        <div className="col-md-6 col-xs-12 align-content-center">
                            {isSuccess && <p className="alert alert-success dismissible">{message}</p>}
                            {/* {validationError && <p className="alert alert-danger dismissible">{validationError}</p>} */}
                            <form onSubmit={formSubmissionHandler} className="text-center mx-auto"
                                action="http://api.xfactorproductions.ng/wp-json/contact-form-7/v1/contact-forms/69/feedback"
                                method="post">
                                <div className="form-group">
                                    <input id='email-address' name='email-address' type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group ">
                                    <input id='full-name' name='full-name' type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label for="subject">Our services</label>
                                    <select className="form-option" id='subject' name='subject'>
                                        <option>Event Planning</option>
                                        <option>Advertising</option>
                                        <option>Talent Development</option>
                                        <option>Media Consultancy</option>
                                        <option>Artiste Management</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea id='body' name='body' className="form-control " rows="3" placeholder="Tell us what you'd what us to do"></textarea>
                                </div>
                                <div className="col-md-12">
                                    <div className="contact-btn text-center">
                                        <button type="submit" class="btn btn-default btn-main" >{isLoading ? 'Sending...' : 'Send Message'}</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
