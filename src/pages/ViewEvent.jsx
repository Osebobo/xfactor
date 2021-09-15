import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useEvent, useEvents } from '../component/hooks'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import ReactLoading from 'react-loading';
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

export default function ViewEvent(props) {
    const [eventData, setEventData] = useState()
    const events = useEvents().data
    const eventLoading = useEvents().isLoading
    const { id } = useParams()
    const { data, isError, isLoading, refetch  } = useEvent(id)
    useEffect(() => {
        setEventData([])
        refetch().then((res) =>  setEventData(res.data))
    }, [id])
    return (
        <>
            <section className="blog-single">
                <div className="container">
                    <div className="row">
                        <div className="title text-center">
                            <h2>Our Event</h2>
                        </div>
                        <div className="col-md-9">
                            {isLoading ? <div className="mx-auto">
                                <ReactLoading type="cylon" color={'#facd8a'} height={500} width={200} />
                            </div> :
                                <>
                                    <div className="blog-single-section-img">
                                        <img src={eventData?.better_featured_image?.source_url} alt="Blog Single Img" />
                                    </div>
                                    <div className="blog-single-content">
                                        <div className="blog-content-description">
                                            <h3><a className="blog-content-title" href="#">{eventData?.title?.rendered}</a></h3>
                                            <div className="meta">
                                                <div className="date">
                                                    <p><Moment  date={eventData?.date} format="LL" /></p>
                                                </div>
                                                {eventData?.acf?.guest?.length > 2 && <div className="author">
                                                    <p>Feat: {eventData?.guest}</p>
                                                </div>}
                                            </div>

                                        </div>
                                        <div class="blog-content-description">
                                            {eventData?.acf?.event_date?.length > 2 && <h4 class="blog-inner-heading">Event Countdown:  <span color="#facd8a"><Moment durationFromNow date={eventData?.date} /></span>  </h4>}
                                            <p className="blog-description">{ReactHtmlParser(eventData?.content?.rendered)}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="see-all-post text-center">
                                            <Link className="btn btn-default th-btn solid-btn" to="/events"> Back To All Events</Link>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="col-md-3">
                            <div className="blog-sidbar">

                                <div className="related-post widgets">
                                    <div className="list-group">
                                        <div className="list-group-item active text-center">
                                            Related Post
				                    </div>
                                        {
                                            events?.map((event, key) => <Link to={"/event/" + event?.id} className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left media-middle"><p className="post-count">{key + 1}</p></div>
                                                    <div className="media-body">
                                                        <p>{event.title?.rendered}</p>
                                                    </div>
                                                </div>
                                            </Link>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
