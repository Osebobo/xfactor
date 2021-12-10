import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactLoading from 'react-loading';
import { useTeams } from '../component/hooks'
import { Link } from 'react-router-dom';
const settings = {
    dots: true,
    // infinite: false,
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
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
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
export default function OurTeam() {
    const [teamList, setTeamList] = useState([])
    const team = useTeams().data
    const teamLoading = useTeams().isLoading
    useEffect(() => {
        let teamArray = []
        team?.length > 0 && team?.map((t,i) => teamArray.unshift({
            id: t.id,
            image: t.better_featured_image?.source_url,
            position: t.acf?.role,
            except: t.excerpt?.rendered,
            name: t.title?.rendered,
            all: t.content.rendered,
            slug: t.slug,
        }))
        setTeamList(teamArray)
    }, [team])
    
    return (
        <div className="container">
            {teamLoading ?
                <div className="mx-auto">
                    <ReactLoading type="cylon" color='#facd8a' height={500} width={200} />
                </div> :
                <>
                    <Slider {...settings}>
                        {
                            teamList.map((team, i) => <div key={i} class="team-member">
                                <div class="th-mouse-effect m-4">
                                    <img src={team.image} alt="Team img" />
                                    <div class="details">
                                    <Link to={`/team/view/${team?.id}`}><h3 className="blog-title">{team.name}</h3></Link>
                                            <p>{team.position}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </Slider>
                    {/* <div class="col-md-12">
                        <div class="join-team text-center">
                            <Link class="btn btn-default btn-main" to="/team" role="button">See More</Link>
                        </div>
                    </div> */}
                </>
            }
        </div>
    )
}
