import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

const Resources = () => {
    var Resources_slider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.26,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.25,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.25,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1.03,
                    slidesToScroll: 1
                }
            }]
    };
    return (
        <section className='py-5 overflow-hidden'>
            <Container className=''>
                <div className=' d-flex flex-column flex-lg-row align-items-lg-center'>
                    <div>
                        <h2 className=' ff_Medium fw_400 fs_3xl white'>
                            Resources
                        </h2>
                        <p className=' ff_Book fw_400 fs_sm white w-75 pt-2'>
                            Magna scelerisque amet adipiscing diam ac justo. Elementum mattis aenean malesuada mauris eget platea id. Ullamcorper.
                        </p>
                    </div>
                    <div className=' d-flex align-items-center'>
                        <div className='Resources_Blogs px-3'>
                            <p className='ff_Medium fw_400 fs_xl white'>
                                Blogs
                            </p></div>
                        <div className='Resources_Documentation'>
                            <p className='ff_Medium fw_400 fs_xl white ps-5 ms-4 '>
                                Documentation
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Slider {...Resources_slider} className=' pt-5 mt-3'>
                <div className=''>
                    <div className='Resources_slider_box mx-2'>
                        <p className=' ff_Medium fw_400 fs_lg white'>Phasellus convallis</p>
                        <p className=' ff_Book fw_300 fs_sm grey opacity_7'>Euismod quisque semper ut sem. Enim vivamus in tortor malesuada lectus.</p>
                        <a href="#" className=' ff_Bold fw_500 fs_md sky Resources_slider_box_btn d-inline-block mt-3'>Learn More</a>
                    </div>
                </div>
                <div className=''>
                    <div className='Resources_slider_box mx-2'>
                        <p className=' ff_Medium fw_400 fs_lg white'>Phasellus convallis</p>
                        <p className=' ff_Book fw_300 fs_sm grey opacity_7'>Euismod quisque semper ut sem. Enim vivamus in tortor malesuada lectus.</p>
                        <a href="#" className=' ff_Bold fw_500 fs_md sky Resources_slider_box_btn d-inline-block mt-3'>Learn More</a>
                    </div>
                </div>
                <div className=''>
                    <div className='Resources_slider_box mx-2'>
                        <p className=' ff_Medium fw_400 fs_lg white'>Phasellus convallis</p>
                        <p className=' ff_Book fw_300 fs_sm grey opacity_7'>Euismod quisque semper ut sem. Enim vivamus in tortor malesuada lectus.</p>
                        <a href="#" className=' ff_Bold fw_500 fs_md sky Resources_slider_box_btn d-inline-block mt-3'>Learn More</a>
                    </div>
                </div>
                <div className=''>
                    <div className='Resources_slider_box mx-2'>
                        <p className=' ff_Medium fw_400 fs_lg white'>Phasellus convallis</p>
                        <p className=' ff_Book fw_300 fs_sm grey opacity_7'>Euismod quisque semper ut sem. Enim vivamus in tortor malesuada lectus.</p>
                        <a href="#" className=' ff_Bold fw_500 fs_md sky Resources_slider_box_btn d-inline-block mt-3'>Learn More</a>
                    </div>
                </div>
                <div className=''>
                    <div className='Resources_slider_box mx-2'>
                        <p className=' ff_Medium fw_400 fs_lg white'>Phasellus convallis</p>
                        <p className=' ff_Book fw_300 fs_sm grey opacity_7'>Euismod quisque semper ut sem. Enim vivamus in tortor malesuada lectus.</p>
                        <a href="#" className=' ff_Bold fw_500 fs_md sky Resources_slider_box_btn d-inline-block mt-3'>Learn More</a>
                    </div>
                </div>

            </Slider>

        </section>
    )
}

export default Resources