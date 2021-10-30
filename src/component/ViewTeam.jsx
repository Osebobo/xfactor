import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ReactLoading from 'react-loading';
import { useTeam } from './hooks'
import ReactHtmlParser from 'react-html-parser';
import image from "../assets/images/slider/slide-2.jpg"


export default function ViewTeam(props) {
    const [teamData, setTeamData] = useState()
    const { id } = useParams()
    const { data, isError, isLoading, refetch } = useTeam(id)
    useEffect(() => {
        const unlisten = props.history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);
    useEffect(() => {
        setTeamData([])
        refetch().then((res) => setTeamData(res.data))
    }, [id])
    return (
        <>
            <section className="page-header services-header" data-parallax="scroll" style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center" style={{ color: '#fff' }}>  Team Member </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-team">
                <div className="container">
                    {
                        isLoading ? <div className="mx-auto">
                            <ReactLoading type="cylon" color='#facd8a' height={500} width={200} />
                        </div>
                            :
                            <>
                            <div className="row">
                                <div className="col-xs-12 col-md-12 col-lg-6">
                                    <img style={{ height: '25%', width: '70%' }} src={teamData?.better_featured_image?.source_url} className="img-responsive img-rounded" alt="Team img" />
                                </div>
                                <div className="col-xs-12 col-md-12 col-lg-6">
                                    <div class="content text-dark">
                                        <h3>{teamData?.title?.rendered}</h3>
                                        <h5 style={{ color: '#000' }}>{teamData?.acf?.role}</h5>
                                        <p style={{ color: '#000', fontSize: '16px' }}>{ReactHtmlParser(teamData?.content?.rendered)}</p>
                                    </div>
                                </div>
                            </div>
                            </>

                    }
                </div>
            </section>

            {/* <section id="speakers-details">
                <div class="container">
                    <div class="section-header">
                        <h2>Team Member: {teamData?.title?.rendered}</h2>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <img src={teamData?.better_featured_image?.source_url} alt="" class="img-fluid"/>
                        </div>
                        { isLoading ? <div className="mx-auto">
                                <ReactLoading type="cylon" color='#facd8a' height={500} width={200} />
                            </div>
                                :
                                <div class="col-md-6">
                                    <div class="details">
                                        <h2>{teamData?.title?.rendered}</h2>
                                        <p>{ReactHtmlParser(teamData?.content?.rendered)}</p>
                                    </div>
                                </div>
                        }

                    </div>
                </div>

            </section> */}

        </>
    )
}