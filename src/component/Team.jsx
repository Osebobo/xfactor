import React, { useEffect, useState } from 'react'
import { useTeams } from './hooks'
import ReactLoading from 'react-loading';
import ReactHtmlParser from 'react-html-parser';
export default function Team() {
    const { data, isLoading, isError } = useTeams()
    const [team, setTeam] = useState([])
    useEffect(() => {
        let tm = []
        data?.map(t => tm.push({
            image: t.better_featured_image?.source_url,
            position: t.acf?.position,
            except: t.excerpt.rendered,
            name: t.title?.rendered,
            all: t.content.rendered
        }))
        setTeam(tm)
    }, [team])
    return (
        <>
            <section className="page-header services-header" data-parallax="scroll" data-image-src="images/header/services-folding-img.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center"> Our Team </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services">
                <div className="container">
                    {isLoading ? <div className="mx-auto">
                        <ReactLoading type="cylon" color='#facd8a' height={500} width={200} />
                    </div> : team.map((tm, i) => <div style={{ paddingBottom: '15vh', marginBottom: '15vh', borderBottom: '1px solid #facd8a99' }} key={i} className="row">
                        <div className="col-xs-12 col-md-12 col-lg-6">
                            <img height={400} src={tm.image} className="img-responsive img-rounded" alt="Team img" />
                        </div>
                        <div className="col-xs-12 col-md-12 col-lg-6">
                            <div class="content">
                                <h3>{tm.name}</h3>
                                <h5>Position: {tm.position}</h5>
                                {ReactHtmlParser(tm.all)}
                            </div>
                        </div> 
                    </div>)}
                </div>
            </section>
        </>
    )
}
