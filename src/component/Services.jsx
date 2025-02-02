import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaConnectdevelop } from "react-icons/fa";
import { FcPlanner, FcAdvertising } from "react-icons/fc";
import { MdPermMedia } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";



import Slider from "react-slick";
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
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
export default function Services() {
    return (
        <>
            <Slider {...settings}>
                <div class="service-item text-center">
                    <div class="services-icon"> 
                        <i><FaConnectdevelop/></i>
                    </div>
                    <h4 class="service-title">Talent development</h4>
                    <p class="service-description">
                        X-Factor Productions works to develop and refine your talent.
                        We champion designing effective and strategic initiatives that set you apart from the masses and up for success.
                    </p>
                </div>
                <div class="service-item text-center">
                    <div class="services-icon">
                        <i><MdManageAccounts/></i>
                    </div>
                    <h4 class="service-title">Artiste management</h4>
                    <p class="service-description">
                        We guide the professional career of artistes of all genres in the entertainment industry. We'll help you shape your career both in a day-to-day and long-term sense.
                           </p>
                </div>
                <div class="service-item text-center">
                    <div class="services-icon">
                        <i><FcPlanner /></i>
                    </div>
                    <h4 class="service-title">Event planning</h4>
                    <p class="service-description">
                        We understand the inside-out of events and have got professionals who've got great track records with planning and implementing small and/or large-scale; personal or corporate events.  </p>
                </div>
                <div class="service-item text-center">
                    <div class="services-icon">
                        <i><FcAdvertising /></i>
                    </div>
                    <h4 class="service-title">Advertising</h4>
                    <p class="service-description">
                        We are dedicated to creating, planning, and handling advertising as well as other forms of promotion and marketing   </p>
                </div>
                <div class="service-item text-center">
                    <div class="services-icon">
                        <i><MdPermMedia /></i>
                    </div>
                    <h4 class="service-title">Media consultancy</h4>
                    <p class="service-description">
                        We are your perfect PR executive!   </p>
                </div>
            </Slider>
        </>
    )
}
