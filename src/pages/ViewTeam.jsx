import Axios from 'axios'
import React, {
    useState,
    useEffect
} from 'react'
import { useParams, Link } from 'react-router-dom'
import image from "../assets/images/slider/slide-2.jpg"
import ReactLoading from 'react-loading';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from 'react-helmet';


export default function ViewTeam() {
    const [tm, setTm] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        setIsLoading(true)
        Axios.get(`https://api.xfactorproductions.ng/wp-json/wp/v2/team/${id}` ).then(res => {
            const { data } = res
            setTm({
                id: data.id,
                image: data.better_featured_image?.source_url,
                position: data.acf?.role,
                except: data.excerpt?.rendered,
                name: data.title?.rendered,
                all: data.content?.rendered,
                slug: data.slug,
                yoast_head: data.yoast_head,
            })
            setIsLoading(false)
        })
    }, [id])
    return (
        <>

            <Helmet>
                <title>{tm?.yoast_head_json?.title}</title>
                <meta name="description" content = {tm?.yoast_head_json?.description} />
                {tm?.yoast_head}
            </Helmet>
            {/* <section className="page-header services-header" data-parallax="scroll" style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center" style={{ color: '#fff' }}>  Book a Service </h1>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id="team-details">
                <div class="container">
                    <div class="title text-center">
                        <h2>{tm?.name}</h2>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <img src={tm?.image} alt="" class="img-fluid" />
                        </div>
                        {isLoading ? <div className="mx-auto">
                            <ReactLoading type="cylon" color='#facd8a' height={500} width={200} />
                        </div>
                            :
                            <div class="col-md-6">
                                <div class="details">
                                    <h5 >Position: <span>{tm?.position}</span> </h5>
                                    <p>{ReactHtmlParser(tm?.all)}</p>
                                    <div className="see-all-post text-center">
                                        <Link className="btn btn-default th-btn solid-btn" to="/team"> View All Teams</Link>
                                    </div>
                                    
                                </div>
                            </div>
                        }

                    </div>
                </div>

            </section>
            {/* <section className="contact-form">
                <div style={{ paddingBottom: '15vh', marginBottom: '15vh', borderBottom: '2px solid #facd8a' }} className="row ">
                    <div className="col-xs-12 col-md-12 col-lg-6">
                        <img src={tm?.image} className="img-responsive img-fluid" alt="Team img" />
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-6">
                        <div class="text-dark content text-dark details">
                            <h3>{tm?.name}</h3>
                            <h5 style={{ color: '#000' }} >Position: <span>{tm?.position}</span> </h5>
                            <p style={{ color: '#000' }}>{ReactHtmlParser(tm?.all)}</p>
                            <Link to={`/team/${tm?.id}`}>View</Link>
                        </div>
                    </div>
                </div>
            </section> */}
        </>

    )
}
