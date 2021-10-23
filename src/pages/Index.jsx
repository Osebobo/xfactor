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
import "react-placeholder/lib/reactPlaceholder.css";
import EventCard from '../component/EventCard';
import ReactLoading from 'react-loading';
import ScrollAnimation from 'react-animate-on-scroll';
import abountimage from "../assets/images/Street Dancer Image.jpeg"
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
    const bannersError = useBanners().error
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
            <header>
                <Slider {...settings}>
                    {
                        banners?.map((banner, index) => <div key={index} className="hero-area th-fullpage" data-parallax="scroll" >
                            <div className="container-fluid" style={{ height: '100vh', alignItems: 'center', alignContent: 'center', backgroundImage: `url(${banner?.better_featured_image?.source_url})` }}>
                                <div className="row">
                                    <div className="col-md-12 text-center" style={{ marginTop: '40vh' }}>
                                        <h1>{banner?.title?.rendered}</h1>
                                        <Link className="btn btn-default btn-main" to="/about" role="button">Know More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }

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
            <div className="case-study-content">
                <div className="section">
                    <div className="container-fluid">
                        <Fade left>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title text-center">
                                        <h2>Our Services</h2>
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
            <section className="team">
                <div className="container-fluid padding-0">
                    <Fade bottom>
                        <div className="title text-center">
                            <h2>Live Feeds</h2>
                        </div>
                        {
                            eventLoading ? <ReactLoading type="bar" color={'#facd8a'} height={500} width={200} /> : <>
                                {
                                    eventList.length > 1 &&
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-12 col-lg-7">
                                                <EventCard {...eventList[0]} />
                                            </div>
                                            <div className="col-lg-1"></div>
                                            <div className="col-xs-12 col-md-12 col-lg-4">
                                                <div className="blog-sidbar">
                                                    <div className="related-post widgets">
                                                        <div className="list-group">
                                                            <div className="list-group-item active text-center">
                                                                Previous Feeds And Events
				                        </div>
                                                            {
                                                                eventList.map((event, key) =>
                                                                    <Link to={"/event/" + event?.id} className="list-group-item">
                                                                        <div className="media">
                                                                            <div className="media-left media-middle"><p className="post-count">{key + 1}</p></div>
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
                                }
                            </>

                        }


                    </Fade>
                </div>
            </section>


            {/* <section className="clients" data-parallax="scroll" data-image-src="images/slider/rema-1536x672.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="img-content">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/-frvXtNweXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">

                            <div className="content">
                                <h4 className="inner-title">We are your perfect PR executive!</h4>
                                <p className="case-description">Lets make your dream a reality</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde soluta, nesciunt consequuntur accusamus sint! Eaque quod consectetur laborum quae repudiandae illum hic explicabo sunt perferendis. Voluptas, fugiat eos sed!
                                  </p>

                                <a className="btn btn-default btn-main" href="#" role="button">See Our Videos</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}



        </>
    )
}
//
