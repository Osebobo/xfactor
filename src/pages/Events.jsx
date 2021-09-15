import React, { useState, useEffect } from 'react'
import EventCard from '../component/EventCard'
import { useEvents } from '../component/hooks'
import ReactLoading from 'react-loading';

export default function Events() {
    const [eventList, setEventList] = useState([])
    const event = useEvents().data
    const eventLoading = useEvents().isLoading
    useEffect(() => {
        let eventArray = []
        event?.length > 0 && event.map((e, i) => eventArray.push({
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
            <section className="page-header services-header" data-parallax="scroll" data-image-src="images/header/services-folding-img.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center"> Our Events </h1>
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
                                            Recent Event
                                         </div>
                                        {eventList?.map((e, i) => <a href="#" class="list-group-item">
                                            <div class="media">
                                                <div class="media-left media-middle">
                                                    <p class="post-count">{i + 1}</p>
                                                </div>
                                                <div class="media-body">
                                                    <p>{e.title}</p>
                                                </div>
                                            </div>
                                        </a>)
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
