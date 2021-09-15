import { useState} from 'react'
import { useSendContact } from '../component/hooks'

export default function Booking() {
    const { mutate, isError, isLoading, } = useSendContact()
    const [senderName, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [body, setBody] = useState()
    const onSend = () => {
        mutate({
            senderName,
            email,
            subject,
            body
        })
    }
    return (
        <>
            <section className="page-header services-header" data-parallax="scroll" data-image-src="images/header/services-folding-img.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center"> Book a Service </h1>
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
                        <form className="" method="post" className="col-md-6 col-xs-12 align-content-center">
                            <div className="text-center mx-auto">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group margin-0">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="date" className="form-control" placeholder="Date" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control " rows="3" placeholder="More details"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="contact-btn text-center">
                                    <input className="btn btn-default btn-main" type="submit" value={isLoading ? "Sending..." : "Sent Message"} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
