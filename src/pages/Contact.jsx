import { useState, useEffect } from 'react'
import { useSendContact } from '../component/hooks'
import image from "../assets/images/slider/slide-2.jpg"
export default function Contact({ history }) {
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
            <section className="page-header services-header" data-parallax="scroll" data-parallax="scroll" style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center" style={{ color: '#fff' }}>  Contact Us </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-form">
                <div className="container">

                    <form onSubmit={formSubmissionHandler} className="text-center mx-auto row"
                        action="http://api.xfactorproductions.ng/wp-json/contact-form-7/v1/contact-forms/70/feedback"
                        method="post">
                        {isSuccess && <p className="alert alert-success dismissible">{message}</p>}
                        <>
                            <div className="col-md-6">

                                <div className="form-group">
                                    <input id="subject" name="subject" type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <input id="email" name="email" type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group margin-0">
                                    <input id="full-name" name='full-name' type="text" className="form-control"  placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <textarea id="your-message" name="your-message" className="form-control " rows="3" placeholder="Message"></textarea>
                                </div>
                                <div className="contact-btn text-center">
                                    <button className="btn btn-/default btn-main" type="submit" >{isLoading ? 'Sending...' : 'Send Message'}</button>
                                </div>
                            </div>
                            <div className="col-md-6 margin-4">
                                <div className="title text-center col-md-6 col-xs-12">
                                    <h2>We will love to hear from you!</h2>
                                </div>
                            </div>
                        </>
                    </form>
                </div>
            </section>
        </>
    )
}
