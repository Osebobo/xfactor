import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
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
                        <Link to={"/event/" + event?.id}><h4 className="blog-title">{event?.title}</h4></Link>
                        {/* <div className="meta">
                            <div className="date">
                                <Moment format="LL" date={event?.date} />
                            </div>
                            <div className="author">
                                {event?.acf?.length > 3 && <p>Guest: {event?.guest}</p>}
                            </div>
                        </div> */}
                        <p className="blog-decisions" >{ReactHtmlParser(event?.content.substring(0, 200))} </p>
                        <Link className="btn btn-default th-btn solid-btn" to={`/event/${event?.id}`} role="button">Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}