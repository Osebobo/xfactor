import React, { useEffect } from 'react'
import { useTeams } from '../component/hooks'
import OurTeam from '../component/OurTeam'
import Services from '../component/Services'
import Fade from 'react-reveal/Fade';
import image from "../assets/images/slider/slide-2.jpg"
export default function About({ history }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);
    const { data, isLoading, isError } = useTeams()
    return (
        <>
            <section className="page-header services-header" data-parallax="scroll" style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center" style={{ color: '#fff' }}>  About Us </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services">

                <div class="container">
                    <Fade bottom>
                        <div class="section py-5" style={{ marginBottom: '5em' }}>
                            <div className="content row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <h3 style={{ padding: '2em 0' }} > Who we are </h3>
                                    <p style={{ color: 'rgb(54, 54, 54', fontSize: '16px', textAlign: 'justify'}}>
                                        X Factor Productions is a boutique entertainment company specializing in talent development, artistes management, event planning, advertising and media consultancy.
                                     <p>  Located in the city of Lagos with our international concern represented in the city of London, our desire to build a global and strategic partnership that uplifts the artistic offerings of the African continent is relentless.</p>
                                        <p>  The African youth and the energy they exude inspires us and our desire to see them achieve global relevance continues to propel us to seek creative talents.</p>
                                       We take pride in the diversity of the African continent and its unending reservoir of talents. We strive hard to showcase the immense creativity flowing from this unending reservoir and we have made it a point of duty to amplify it to the world.
                                     </p>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <h3 style={{ padding: '2em 0' }}>Our Mission </h3>

                                    <p style={{ color: 'rgb(54, 54, 54', fontSize: '16px', textAlign: 'justify' }}>X Factor production's mission is to create an entertainment platform that enables individuals, companies and communities excel across Africa. </p>
                                    <h3 style={{ padding: '2em 0', fontSize: '16px', textAlign: 'justify' }}>Our Vision </h3>

                                    <p style={{ color: 'rgb(54, 54, 54', fontSize: '16px', textAlign: 'justify' }}> X Factor production's vision is to make it easier for individuals and companies to achieve relevance through entertainment across Africa and around the world

 </p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
            <section class="case-study-content" style={{ backgroundColor: '#e24728' }}>
                <Fade bottom>
                    <div class="section">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="title text-center">
                                        <h2 style={{ color: '#fff' }}>Our Services</h2>
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
                </Fade>
            </section>
            <Fade bottom>
                <section id="team">
                    <div class="container-fluid padding-0">

                        <div class="title text-center">
                            <h2>Our Team</h2>
                        </div>
                        <OurTeam team={data} isLoading={isLoading} isError={isError} />
                    </div>
                </section>
            </Fade>
            <Fade bottom>
                <section class="pricing-table">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="title text-center">
                                    <h2 style={{ color: '#fff' }}>Our Core Values</h2>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="table text-center" >
                                    <div class="table-price border-effect" style={{height: '35vh'}}>
                                        <h4 class="pricing-title" style={{ color: '#fff' }}>INNOVATION</h4>
                                        <p class="table-month" style={{ color: '#fff' }}>We are committed to finding better ways of doing business every day. We create,
                                    innovate and embrace change for growth and better opportunities</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="table text-center" >
                                    <div class="table-price border-effect" style={{height: '35vh'}}>
                                        <h4 class="pricing-title" style={{ color: '#fff' }}>INDIVIDUAL AND TEAM EFFICIENCY</h4>
                                        <p class="table-month" style={{ color: '#fff' }}>We operate in an environment of trust and collaboration. We are loyal to one another, reward improvements inspired by individual ingenuity and celebrate positive results brought about by team effort</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="table text-center" >
                                    <div class="table-price border-effect" style={{height: '35vh'}}>
                                        <h4 class="pricing-title" style={{ color: '#fff' }}>ETHICAL CONDUCT</h4>
                                        <p class="table-month" style={{ color: '#fff' }}>We operate in an environment of trust and collaboration. We are loyal to one another, reward improvements inspired by individual ingenuity and celebrate positive results brought about by team effort</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </Fade>
        </>
    )
}
