import React, { useEffect, useState } from 'react'
import OurTeam from '../component/OurTeam'
import Services from '../component/Services'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEvents } from '../component/hooks';
import { Helmet } from "react-helmet";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import EventCard from '../component/EventCard';
import ReactLoading from 'react-loading';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
};

export default function Index() {
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>Platinum J's</title>
                <link rel="canonical" href="http://platinumjs.com" />
            </Helmet>
            <header>
                <Slider {...settings}>
                    <div className="hero-area th-fullpage" data-parallax="scroll" >
                        <div className="container-fluid" style={{ height: '100vh', alignItems: 'center', alignContent: 'center', backgroundImage: `url(images/slider/slide-2.jpg)` }}>
                            <div className="row">
                                <div className="col-md-12 text-center" style={{ marginTop: '40vh' }}>
                                    <h1>Uplifting The Artistic Offerings  <br />
                                     Of The African Continent </h1>
                                    <Link className="btn btn-default btn-main" to="/about" role="button">Know More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-area th-fullpage" data-parallax="scroll" >
                        <div className="container-fluid" style={{ height: '100vh', alignItems: 'center', alignContent: 'center', backgroundImage: `url(images/slider/bg-3.jpg)` }}>
                            <div className="row">
                                <div className="col-md-12 text-center" style={{ marginTop: '40vh' }}>
                                    <h1>Uplifting The Artistic Offerings  <br />
                                     Of The African Continent </h1>
                                    <Link className="btn btn-default btn-main" to="/about" role="button">Know More</Link>
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
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <div className="content">
                                    <h4 className="inner-title">We build Artist</h4>
                                    <p className="case-description">  Platinum J’s World is a boutique entertainment company specializing in talent development, artistes management, event planning, advertising and media consultancy.</p>
                                    <p>
                                        Located in the city of Lagos with our international concern represented in the city of London, our desire to build a global and strategic partnership that uplifts the artistic offerings of the African continent is relentless.
                                      </p>

                                    <Link className="btn btn-default btn-main" to="/about" role="button">Know More</Link>
                                </div>
                            </div>
                            <div className="d-sm-none col-md-6">
                                <div className="img-content">
                                    <img className="img-responsive" src="images/slider/rema-1536x672.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="case-study-content">
                    <div className="section">
                        <div className="container-fluid">
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
                        </div>
                    </div>
                </div>
            </section>





            <section className="clients" data-parallax="scroll" data-image-src="images/slider/rema-1536x672.jpg">
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

            </section>


            <section className="contact-call-to-action">
                <div className="shadow-block vh-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block"> 
                                    <h2>We will Love to hear from you!</h2>
                                    <Link className="btn btn-default btn-main"  role="button" to="/contact">Contact Us</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map"></div>
            </section>
            <section className="team">
                <div className="container-fluid padding-0">
                    <div className="title text-center">
                        <h2>Our Events</h2>
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
                                                            Upcoming Events
				                        </div>
                                                        {
                                                            eventList.map((event, key) => <a href="#" className="list-group-item">
                                                                <div className="media">
                                                                    <div className="media-left media-middle"><p className="post-count">{key + 1}</p></div>
                                                                    <div className="media-body">
                                                                        <p>{event.title}</p>
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
                            }
                        </>

                    }


                </div>
            </section>
        </>
    )
}
//
