import React, { useState, useEffect } from 'react'
import EventCard from '../component/EventCard'
import { useEvents } from '../component/hooks'
import ReactLoading from 'react-loading';
import { Helmet } from 'react-helmet';
import image from "../assets/images/slider/slide-3.jpg"
import { Link } from 'react-router-dom';

export default function Events({ history}) {
    const [eventList, setEventList] = useState([])
    const event = useEvents().data
    const eventLoading = useEvents().isLoading
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);
    useEffect(() => {
        let eventArray = []
        event?.length > 0 && event.map((e, i) => eventArray.unshift({
            id: e.id,
            title: e.title?.rendered,
            content: e.content?.rendered,
            date: e.date,
            image: e.better_featured_image?.source_url,
            guest: e.acf?.guest,
            slug: e.slug,
        }))
        setEventList(eventArray)
    }, [event])
    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Events - X Factor Productions Ltd</title>
                <link rel="canonical" href="http://xfactorproductions.ng/events" />
            </Helmet>
            <section className="page-header services-header" data-parallax="scroll" style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center" style={{ color: '#fff' }}> Updates </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="blog">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            {eventLoading ? <div className="mx-auto">
                                <ReactLoading type="cylon" color={'#facd8a'} height={500} width={200} />
                            </div> : eventList?.map((e, i) => <EventCard key={i} {...e} />)}
                            <div class="col-md-12">
                                <div class="see-all-post text-center">
                                    <a class="btn btn-default th-btn solid-btn" href="#" role="button">See All Posts <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="blog-sidbar">
                                <div class="related-post widgets">
                                    <div class="list-group">
                                        <div class="list-group-item active text-center">
                                            Recent Updates
                                         </div>
                                         {
                                             eventList?.map((event, key) => <Link to={"/event/" + event?.slug} className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left media-middle"><p className="post-count" style={{ color: '#e24728' }}>{key + 1}</p></div>
                                                    <div className="media-body">
                                                        <p>{event.title}</p>
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
