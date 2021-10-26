import React, { useEffect, useState } from 'react'
import OurTeam from '../component/OurTeam'
import Services from '../component/Services'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";
import { useBanners, useEvents } from '../component/hooks';
import { Helmet } from "react-helmet";
import Fade from 'react-reveal/Fade';
import EventCard from '../component/EventCard';
import ReactLoading from 'react-loading';
import ScrollAnimation from 'react-animate-on-scroll';
import abountimage from "../assets/images/Street Dancer Image.jpeg"
import ContentLoader from "react-content-loader"
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
};
export default function Index({ history }) {
    const [eventList, setEventList] = useState([])
    const event = useEvents().data
    const eventLoading = useEvents().isLoading
    const banners = useBanners().data
    const bannersLoading = useBanners().isLoading
    const [videoPost, setVideoPost] = useState([])
    const bannersError = useBanners().error
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        axios.get("https://api.xfactorproductions.ng/wp-json/wp/v2/video-post")
            .then(res => {
                let ep = [];
                res.data?.map(d => ep.push({
                    link: d?.acf?.youtube_link,
                    title: d?.title?.rendered,
                    content: d?.content?.rendered?.length > 400 ? d?.content?.rendered?.substring(0, 400) : d?.content?.rendered,
                }))
                setVideoPost(ep)
            })
        return () => {
            unlisten();
        }


    }, []);
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>X Factor Productions</title>
                <link rel="canonical" href="http://xfactorproductions.ng/" />
            </Helmet>
            <header style={{ backgroundColor: '#ffff' }}>
                {bannersLoading ? <> <ContentLoader
                    speed={2}
                    width={"100vw"}
                    height={"100vh"}
                    viewBox="0 0 400 460"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="100" rx="2" ry="2" width="100vh" height="100vh" />
                </ContentLoader> </> :
                    <>
                        <Slider {...settings}>
                            {
                                banners?.map((banner, index) => <div key={index} className="hero-area th-fullpage" data-parallax="scroll" >
                                    <div className="container-fluid" style={{ height: '100vh', alignItems: 'center', alignContent: 'center', backgroundImage: `url(${banner?.better_featured_image?.source_url})` }}>
                                        <div className="row">
                                            <div className="col-md-12 text-center" style={{ marginTop: '40vh' }}>
                                                <h1>{banner?.title?.rendered}</h1>
                                                {banner?.title && <Link className="btn btn-default btn-main" to="/about" role="button">Know More</Link>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }

                        </Slider> </>}
            </header>

            <section className="case-study">
                <div className="text-center">
                    <h2 className="title">About Us</h2>
                </div>
                <div className="case-study-content">
                    <div className="container">
                        <div className="row align-content-center">
                            <div className="col-md-6 col-xs-12">
                                <div className="content">
                                    <h4 className="inner-title">We build Artist</h4>
                                    <p className="case-description">X Factor Productions is a boutique entertainment company specializing in talent development, artistes management, event planning, advertising and media consultancy.</p>
                                    <p>
                                        Located in the city of Lagos, with our international concern represented in London, United Kingdom, our desire is to build a global brand with strategic partnerships that uplift the artistic offerings of the African continent   </p>

                                    <Link className="btn btn-default btn-main" to="/about" role="button">Know More</Link>
                                </div>
                            </div>
                            <div className="d-sm-none col-md-6">
                                <Fade left>
                                    <div className="img-content">
                                        <img className="img-responsive" src={abountimage} alt="" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="case-study-content" style={{ backgroundColor: '#e24728' }}>
                <div className="section">
                    <div className="container-fluid">
                        <Fade left>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title text-center">
                                        <h2 style={{ color: '#fff' }}>Our Services</h2>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <Services />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            {  eventList.length > 0 && <section className="team">
                <div className="container-fluid padding-0">
                    <Fade bottom>
                        <div className="title text-center mb-4">
                            <h2>Live Feeds</h2>
                        </div>
                        {
                            eventLoading ? <ReactLoading type="bar" color={'#facd8a'} height={500} width={200} /> : <>
                                {

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-12 col-lg-7">
                                                <EventCard {...eventList[0]} />
                                            </div>
                                            <div className="col-lg-1"></div>
                                            <div className="col-xs-12 col-md-12 col-lg-4">
                                                <div className="blog-sidbar" >
                                                    <div className="related-post widgets" style={{ backgroundColor: '#fff' }}>
                                                        <div className="list-group">
                                                            <div className="list-group-item active text-center" style={{ color: '#fff' }}>
                                                                Previous Feeds And Events
				                                                </div>
                                                            {
                                                                eventList.map((event, key) =>
                                                                    <Link to={"/event/" + event?.id} className="list-group-item" style={{ backgroundColor: '#fff' }}>
                                                                        <div className="media" style={{ borderBottom: '1px solid #e24728' }}>
                                                                            <div className="media-left media-middle"><p className="post-count" style={{ backgroundColor: '#e24728' }}>{key + 1}</p></div>
                                                                            <div className="media-body">
                                                                                <p style={{ color: '#e24728' }}>{event.title}</p>
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
                                }
                            </>

                        }


                    </Fade>
                </div>
            </section>
            }
            {videoPost.length &&
                <section style={{ backgroundColor: '#fff' }}
                    className="clients" data-parallax="scroll" data-image-src="images/slider/rema-1536x672.jpg">
                    <div className="container">
                        <div className="row">
                            <div className=" col-xs-12">
                                <div className="img-content">
                                    <iframe width="100%" height="500" src={'https://www.youtube.com/embed/S9DLTyMuP64'} title={videoPost[0]?.title}
                                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="col-xs-12">

                                <div className="content">
                                    <h2 className="inner-title" style={{ fontSize: '16px', color: '#e24728' }}>{videoPost[0]?.title}</h2>
                                    {/* <div> {ReactHtmlParser(videoPost[0]?.content)}</div> */}

                                    <Link className="btn btn-default btn-main" to="/gallery" role="button">See Our Videos</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            }


        </>
    )
}
//
