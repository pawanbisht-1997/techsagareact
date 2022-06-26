import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Testimonial = () => {

  const testominal = [
    {
      id: 1,
      title: "hello Here"
    },
    {
      id: 2,
      title: "hello Here"
    },
    {
      id: 3,
      title: "hello Here"
    },
    {
      id: 4,
      title: "hello Here"
    },
    {
      id: 5,
      title: "hello Here"
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testimonial pt-top pt-btm">
      <div className="container">
        {/* <div className="flex spce-btwn"> */}
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={5000}>
          {
            testominal.map((curEle) => {

              return (
                <>
                  <div className="test-item" key={curEle.id}>
                    <div className="box">
                      <FaQuoteLeft />
                      <p>
                        The way Techsaga initiate the project understood discussions and
                        helped us shape the online solution for our requirements is
                        simply amazing. The team is brilliant.
                      </p>
                    </div>
                    <div className="posted-by  flex align-center">
                      <div className="avtar">
                        <img src="./Assets/img/avtar.jpg" alt="avtar" />
                      </div>
                      <div className="avatar-name">
                        <h4>Lisa Fedro</h4>
                        <p>CEO, Keen IT Solution</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
            )
          }
        </Carousel>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Testimonial;
