import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactLoading from 'react-loading';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
export default function OurTeam(props) {
    const [team, setTeam] = useState([])
    useEffect(() => {
        let tm = []
        props.team?.map && props.team?.map(t => tm.push({
            image: t.better_featured_image?.source_url,
            position: t.acf?.position,
            except: t.excerpt?.rendered,
            name: t.title?.rendered,
            all: t.content.rendered
        }))
        setTeam(tm)
    }, [props.team])
    return (
        <div className="container">
            { props.isLoading ?
                <div className="mx-auto">
                    <ReactLoading type="cylon" color='#facd8a' height={500} width={200} />
                </div> :
                <>
                    <Slider {...settings}>
                        {
                            team.map((tm, i) => <div key={i} class="team-member">
                                <div class="th-mouse-effect m-4">
                                    <div class="team-img">
                                        <img height={400} src={tm.image} alt="Team img" />
                                    </div>
                                    <div class="overlay text-center">
                                        <div class="content">
                                            <h4>{tm.name} </h4>
                                            <span>Position: {tm.position}</span>
                                            <p>{ReactHtmlParser(tm.except)}</p>
                                        </div>
                                        {/* <div class="social-media">
                                            <li><a href="#"><i class="tf-ion-social-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="tf-ion-social-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="tf-ion-social-linkedin-outline" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="tf-ion-social-google-outline" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="tf-ion-social-instagram-outline" aria-hidden="true"></i></a></li>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </Slider>
                    <div class="col-md-12">
                        <div class="join-team text-center">
                            <Link class="btn btn-default btn-main" to="/team" role="button">See More</Link>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
