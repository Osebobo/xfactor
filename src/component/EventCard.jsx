import React from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
export default function EventCard(event) {
    return (
        <>
            <div className="blog-list-section blog-content-right row">
                <div className="col-md-9 blog-content-area">
                    <div className="blog-img">
                        <img className="img-responsive" width={'100%'} src={event?.image} alt="" />
                    </div>
                    <div className="blog-content">
                        <Link to={"/update/" + event?.slug}><h4 className="blog-title">{event?.title}</h4></Link>
                        <p className="blog-decisions" >{ReactHtmlParser(event?.content.substring(0, 200))} </p>
                        <Link className="btn btn-default th-btn solid-btn" to={`/update/${event?.slug}`} role="button">Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}