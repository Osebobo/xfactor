import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useEvent, useEvents } from '../component/hooks'
import ReactLoading from 'react-loading';
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function ViewEvent(props) {

    // const [eventData, setEventData] = useState()
    const [eventList, setEventList] = useState([])
    const event = useEvents().data
    // const { id } = useParams()
    // const { data, isError, isLoading, refetch } = useEvent(id)
    useEffect(() => {
        const unlisten = props.history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);
    const [tm, setTm] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const { slug } = useParams()

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
    }, [event]);
    useEffect(() => {
        setIsLoading(true)
        Axios.get(`https://api.xfactorproductions.ng/wp-json/wp/v2/event/?slug=${slug}` ).then(res => {
            const { data } = res
            console.log(data)
            setTm({
                id: data[0].id,
                image: data[0].better_featured_image?.source_url,
                position: data[0].acf?.role,
                except: data[0].excerpt?.rendered,
                name: data[0].title?.rendered,
                all: data[0].content?.rendered,
                slug: data[0].slug,
                yoast_head: data[0].yoast_head,
            })
            setIsLoading(false)
        })
    }, [slug])
    return (
        <>
            <Helmet>
                <title>{tm?.yoast_head_json?.title}</title>
                <meta name="description" content = {tm?.yoast_head_json?.description} />
                {tm?.yoast_head}
            </Helmet>
            <section className="blog-single">
                <div className="container">
                    <div className="row">
                        <div className="title text-center">
                            <h2>{tm?.name}</h2>
                        </div>
                        <div className="col-md-8">
                            {isLoading ? <div className="mx-auto">
                                <ReactLoading type="cylon" color={'#facd8a'} height={500} width={200} />
                            </div> :
                                <>
                                    <div className="blog-single-section-img">
                                        <img src={tm?.image} alt="Blog Single Img" />
                                    </div>
                                    <div className="blog-single-content">
                                        <div className="blog-content-description">
                                            {/* <h3><a className="blog-content-title" href="#">{eventData?.title?.rendered}</a></h3> */}
                                            <div class="blog-content-description">
                                                {/* {tm?.acf?.event_date?.length > 2 && <h4 class="blog-inner-heading">Event Countdown:  <span color="#facd8a"><Moment durationFromNow date={tm?.date} /></span>  </h4>} */}
                                                <p className="blog-description" style={{ fontSize: '16px', color: "#232323" }}>{ReactHtmlParser(tm?.all)}</p>
                                                {/* <Link classsName="btn btn-default btn-main" to={eventData?.acf?.link} role="button"> Register Here</Link> */}
                                            </div>
                                            
                                            {/* <div className="meta">
                                                <div className="date">
                                                    <p style={{ fontSize: '16px', color: "#e24728" }}><Moment date={eventData?.date} format="LL" /></p>
                                                </div>
                                                {eventData?.acf?.guest?.length > 2 && <div className="author">
                                                    <p>{eventData?.guest}</p>
                                                </div>}
                                            </div> */}

                                        </div>

                                    </div>
                                    <div className="col-md-12">
                                        <div className="see-all-post text-center">
                                            <Link className="btn btn-default th-btn solid-btn" to="/events" role="button"> Back To All Events</Link>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="col-md-4">
                            <div className="blog-sidbar">

                                <div className="related-post widgets">
                                    <div className="list-group">
                                        <div className="list-group-item active text-center">
                                            Previous Event
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