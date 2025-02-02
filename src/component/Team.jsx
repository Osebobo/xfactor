import React, { useEffect, useState } from 'react'
import { useTeams } from './hooks'
import image from "../assets/images/slider/slide-2.jpg"
import ReactLoading from 'react-loading';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function Team({ history }) {
    const { data, isLoading, isError } = useTeams()
    const [team, setTeam] = useState([])
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);
    useEffect(() => {
        let tm = []
        data?.map(t => tm.unshift({
            id: t.id,
            image: t.better_featured_image?.source_url,
            position: t.acf?.role,
            except: t.excerpt?.rendered,
            name: t.title?.rendered,
            all: t.content.rendered,
            slug: t.slug,
        }))
        setTeam(tm)
        
    }, [team])
    
    return (
        <>  
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Team - X Factor Productions Ltd</title>
                <link rel="canonical" href="http://xfactorproductions.ng/team" />
            </Helmet>
            <section className="page-header services-header" data-parallax="scroll" data-parallax="scroll" style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center" style={{ color: '#fff' }}>  Our Team </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section id="team-details">
                <div className="container">
                    {
                        isLoading ? <div className="mx-auto">
                            <ReactLoading type="cylon" color='#facd8a' height={500} width={200} />
                        </div>
                            :
                            team.map((tm, i) =>
                                <div style={{ paddingBottom: '15vh', marginBottom: '15vh', borderBottom: '2px solid #facd8a' }} key={i} className="row ">
                                    <div className="col-xs-12 col-md-6 col-lg-6">
                                        <img src={tm.image} className="img-responsive img-fluid" alt="Team img" />
                                    </div>
                                    <div className="col-xs-12 col-md-6 col-lg-6">
                                        <div class="content text-dark details">
                                            <h3>{tm.name}</h3>
                                            <h5 >Position: <span>{tm.position}</span> </h5>
                                            <p>{ReactHtmlParser(tm.all)}</p>
                                            <div className="see-all-post text-center">
                                                <Link className="btn btn-default th-btn solid-btn" to={"/team/view/" + tm?.slug}> View </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </section>
        </>
    )
}
