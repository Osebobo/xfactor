import React, { useEffect, useState } from 'react'
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
import image from "../assets/images/slider/drum.jpg"
import image1 from "../assets/images/slider/drum-2.jpg"
import image2 from "../assets/images/slider/drum-4.jpg"


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
                <title>X Factor Productions Ltd</title>
                <link rel="canonical" href="http://xfactorproductions.ng/" />
            </Helmet>
            <header style={{ backgroundColor: '#ffff' }}>
                  
                        <Slider {...settings}>
                           
                                <div className="hero-area th-fullpage" data-parallax="scroll" >
                                    <div className="container-fluid" style={{ height: '100vh', alignItems: 'center', alignContent: 'center', backgroundImage: `url(${image})` }}>
                                        <div className="row">
                                            <div className="col-md-12 text-center" style={{ marginTop: '40vh' }}>
                                                <h1>Uplifting the Artistic Offerings of the African Continent</h1>
                                                <Link className="btn btn-default btn-main mt-4" to="/about" role="button">Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-area th-fullpage" data-parallax="scroll" >
                                    <div className="container-fluid" style={{ height: '100vh', alignItems: 'center', alignContent: 'center', backgroundImage: `url(${image1})` }}>
                                        <div className="row">
                                            <div className="col-md-12 text-center" style={{ marginTop: '40vh' }}>
                                                <h1>Uplifting the Artistic Offerings of the African Continent</h1>
                                                <Link className="btn btn-default btn-main mt-4" to="/about" role="button">Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero-area th-fullpage" data-parallax="scroll" >
                                    <div className="container-fluid" style={{ height: '100vh', alignItems: 'center', alignContent: 'center', backgroundImage: `url(${image2})` }}>
                                        <div className="row">
                                            <div className="col-md-12 text-center" style={{ marginTop: '40vh' }}>
                                                <h1>Uplifting the Artistic Offerings of the African Continent</h1>
                                                <Link className="btn btn-default btn-main mt-4" to="/about" role="button">Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                

                        </Slider>
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
                                    <h4 className="inner-title">We Build Artistes</h4>
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
                    <div className="container">
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
                            <h2>Live Updates</h2>
                        </div>
                        {
                            eventLoading ? <ReactLoading type="bar" color={'#facd8a'} height={500} width={200} /> : <>
                                {

                                    <div className="container ">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-12 col-lg-7">
                                                <EventCard {...eventList[eventList.length - 1]} />
                                            </div>
                                            <div className="col-lg-1"></div>
                                            <div className="col-xs-12 col-md-12 col-lg-4">
                                                <div className="blog-sidbar" >
                                                    <div className="related-post widgets" style={{ backgroundColor: '#fff' }}>
                                                        <div className="list-group">
                                                            <div className="list-group-item active text-center" style={{ color: '#fff' }}>
                                                                Previous Updates
				                                                </div>
                                                            {
                                                                eventList.map((event, key) =>
                                                                    <Link to={"/event/" + event?.slug} className="list-group-item" style={{ backgroundColor: '#ffffff' }}>
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
            
        </>
    )
}
//