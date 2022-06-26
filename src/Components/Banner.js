import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Banner = () => {
    // const slides = document.querySelectorAll(".slider .slides .slide");
    const slides = document.getElementsByClassName("slide");
    let flage = 0;
    const slide_change = (num) => {
        let i;
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('slide_active');
        }
        flage = flage + num;
        if (flage === slides.length) {
            flage = 0;
        }
        if (flage < 0) {
            flage = slides.length - 1;
        }
        console.log(slides);
        slides[flage].classList.add('slide_active');
    }

    setInterval(() => {
        slide_change(+1);
    }, 5000);
    return (
        <section className="slider">
            <div className="container">
                <div className="main-slide">
                    <div className="slides">
                        <div className="slide slide-one slide_active">
                            <div className="image">
                                <img src="./Assets/img/slide-1.png" alt="slideone" className="float-left"/>
                            </div>
                            <div className="content">
                                <h1>Inspired for Innovation</h1>
                                <p>We claim to be your success partner united to deliver innovative technology services in an ever-changing world, inspiring trust and confidence in our expertise.</p>
                                <a className="glb-button" href="/">GET IN TOUCH</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="content">
                                <h1>Empowering Ideas</h1>
                                <p>We bring ideas to incorporate with Business requirements.</p>
                                <a className='glb-button' href="/">GET IN TOUCH</a>
                            </div>
                            <div className="image">
                                <img src="./Assets/img/slidee-2.png" alt="slidetwo" className="float-right"/>
                            </div>
                        </div>
                    </div>
                    <div className="control_slide">
                        <span onClick={() => slide_change(-1)}><IoIosArrowBack /></span>
                        <span onClick={() => slide_change(+1)} id="slide_nex"><IoIosArrowForward /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;