import React from 'react'
import { useTeams } from '../component/hooks'
import OurTeam from '../component/OurTeam'
import Services from '../component/Services'

export default function About() {
    const { data, isLoading, isError } = useTeams()
    return (
        <>
            <section className="page-header services-header" data-parallax="scroll" data-image-src="images/header/services-folding-img.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center"> About Us </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services">
                <div class="container">
                    <div class="section py-5">
                        <div className=" row">
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <h3 > Who we are </h3>
                                <p>
                                    Platinum J's World is a boutique entertainment company specializing in talent development, artistes management, event planning, advertising and media consultancy.
                          <p>  Located in the city of Lagos with our international concern represented in the city of London, our desire to build a global and strategic partnership that uplifts the artistic offerings of the African continent is relentless.</p>
                                    <p>  The African youth and the energy they exude inspires us and our desire to see them achieve global relevance continues to propel us to seek creative talents.</p>
                            We take pride in the diversity of the African continent and its unending reservoir of talents. We strive hard to showcase the immense creativity flowing from this unending reservoir and we have made it a point of duty to amplify it to the world.
                        </p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <h3 >Our Mission </h3>

                                <p>PJWE’s mission is to create an entertainment platform that enables individuals, companies and communities excel across Africa. </p>
                                <h3 className="mt-2">Our Vision </h3>

                                <p> PJWE’s vision is to make it easier for individuals and companies to achieve relevance through entertainment across Africa and around the world

 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="case-study-content">
                <div class="section">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="title text-center">
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
            </section>
            <section class="team">
                <div class="container-fluid padding-0">

                    <div class="title text-center">
                        <h2>Our Team</h2>
                    </div>
                    <OurTeam team={data} isLoading={isLoading} isError={isError} />
                </div>
            </section>
            <section class="pricing-table">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title text-center">
                                <h2>Our Core Values</h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="table text-center">
                                <div class="table-price border-effect">
                                    <h4 class="pricing-title">INNOVATION</h4>
                                    <p class="table-month">We are committed to finding better ways of doing business every day. We create,
                                    innovate and embrace change for growth and better opportunities</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="table text-center">
                                <div class="table-price border-effect">
                                    <h4 class="pricing-title">INDIVIDUAL AND TEAM EFFICIENCY</h4>
                                    <p class="table-month">We operate in an environment of trust and collaboration. We are loyal to one another, reward improvements inspired by individual ingenuity and celebrate positive results brought about by team effort</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="table text-center">
                                <div class="table-price border-effect">
                                    <h4 class="pricing-title">ETHICAL CONDUCT</h4>
                                    <p class="table-month">We operate in an environment of trust and collaboration. We are loyal to one another, reward improvements inspired by individual ingenuity and celebrate positive results brought about by team effort</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
