import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaRegClock } from "react-icons/fa";
import blogs from './BlogCompo';

const Blog = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
    <div className="blog pt-btm">
    <div className="container">
    <Carousel responsive={responsive} infinite={true} autoPlaySpeed={5000} arrow={false}>
     {blogs.map((blogEl) => {
      return (
        <div className="blog-wrap" key={blogEl.id}>
          <div className="img-part">
            <img src={blogEl.img} alt="" className="img-fluid" />
          </div>
          <div className="content-part">
            <a className="categories" href="blog-single.html">
              {blogEl.mintitle}
            </a>
            <h3 className="title">
              <a href="blog-single.html">
                {blogEl.heading}
              </a>
            </h3>
            <div className="blog-meta">
              <div className="user-data">
                <p>
                  {blogEl.des}
                </p>
              </div>
              <div className="date">
                <FaRegClock />{blogEl.date}
              </div>
            </div>
          </div>
        </div>
      )
    })
    }
    </Carousel>
    </div>

    </div>
  )
};

export default Blog;
