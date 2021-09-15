import { useState } from 'react'
import { useSendContact } from '../component/hooks'

export default function Contact() {
    const { mutate, isError, isLoading, isSuccess } = useSendContact()
    const [senderName, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [body, setBody] = useState()
    const onSend = () => {
        mutate({
            senderName,
            yourEmail: email,
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
                            <h1 className="text-center"> Contact Us </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact-form">
                <div class="container">

                    <div class="row">
                       
                        {isSuccess && <p className="alert  text-center alert-success">Mail Sent</p>}
                        {isError && <p className="alert  text-center alert-danger">An Error Occurred</p>}
                        <>
                            <div class="col-md-6">

                                <div class="form-group">
                                    <input type="text" class="form-control" onChange={e => setSubject(e.target.value)} placeholder="Subject" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" onChange={e => setEmail(e.target.value)} placeholder="Email" />
                                </div>
                                <div class="form-group margin-0">
                                    <input type="text" class="form-control" onChange={e => setName(e.target.value)} placeholder="Name" />
                                </div>
                            </div>
                            <div class="col-md-6 margin-0">
                                <div class="form-group">
                                    <textarea class="form-control " onChange={e => setBody(e.target.value)} rows="3" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="contact-btn text-center">
                                    <button class="btn btn-/default btn-main" onClick={onSend} >{isLoading ? 'Sending...' : 'Sent Message'}</button>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}
