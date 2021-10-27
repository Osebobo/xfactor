import React, { useEffect, useState } from 'react'
import { useGalleries, useYoutubeVideos } from '../component/hooks'
import ReactLoading from 'react-loading';
import image from "../assets/images/slider/slide-2.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
    dots: true,
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
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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
export default function Gallery({ history }) {
    const gallery = useGalleries().data
    const galleryLoading = useGalleries().isLoading
    const [galleryArr, setGallery] = useState([])
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);
    useEffect(() => {
        console.log('gallery', gallery);
        let m = []
        gallery?.map && gallery?.map(g => m.push({
            image: g.better_featured_image?.source_url,
            title: g.title?.rendered,
            desc: g.content?.rendered,
            type: g.acf?.media_type
        }))
        setGallery(m)
    }, [gallery])

    return (
        <>

            <section className="page-header services-header" data-parallax="scroll" data-parallax="scroll" style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center" style={{ color: '#fff' }}> Gallery </h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="portfolio">
                <div className="container">
                    <div class="title text-center">
                        <h2>Our Images</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {galleryLoading ?
                                <div style={{ marginLeft: '35vw' }} className="mx-auto">
                                    <p className="text-center text-dark">Getting Images...</p>
                                    <ReactLoading type="cubes" color={'#b31b1b'} height={500} width={200} />
                                </div> :
                                <>
                                    <div id="Container">
                                        {
                                            galleryArr.map((im, i) => <div key={i} className="col-md-4 col-sm-6 col-xs-12">
                                                <div className="portfolio-list">
                                                    <a href="portfolio-single.html">
                                                        <div className="th-mouse-portfolio-card">
                                                            <div className="thumbnail portfolio-thumbnail">
                                                                <img src={im.image} alt="Portfolio" />
                                                                <div className="caption portfolio-caption">
                                                                    <h3 className="portfolio-title">{im.title}</h3>
                                                                    <p className="portfolio-subtitle">Branding</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>)
                                        }

                                    </div>
                                </>
                            }
                        </div>

                    </div>
                </div>
            </section> */}

            <section className="portfolio">
                <div className="container">
                    {/* <div class="title text-center">
                        <h2>Our Videos</h2>
                    </div> */}
                    <YoutubeMedia />
                </div>
            </section>

        </>
    )
}

const YoutubeMedia = () => {
    const videos = useYoutubeVideos().data?.items
    const loading = useYoutubeVideos().isLoading
    return (
        <div className="col-md-12">
            {loading ? <div className="w-100 ml-4 mx-auto">
                <ReactLoading type="cubes" color={'#e24728'} height={200} width={400} />
            </div> :
                <>
                    <div id="Container row">

                        {
                            videos?.map((im, i) =>
                                <div className="portfolio-list col-xs-12 col-md-4">
                                    <a href={`https://www.youtube.com/embed/${im.id?.videoId}`}>
                                        <div className="th-mouse-portfolio-card" style={{ margin: 10 }}>
                                            <div className="thumbnail portfolio-thumbnail">
                                                <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${im.id?.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                <div className="caption portfolio-caption">
                                                    <h3 className="portfolio-title">{im.snippet?.title}</h3>
                                                    {/* <p className="portfolio-subtitle">Branding</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <p style={{ color: '#fff' }}>{im.snippet?.description}</p> */}
                                    </a>
                                </div>
                            )
                        }


                    </div>
                </>
            }
        </div>
    )
}