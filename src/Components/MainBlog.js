import React from 'react';
import { FaSearch, FaRegClock, FaRegCalendarAlt } from "react-icons/fa";
import blogs from './BlogCompo';
export const MainBlog = () => {
  return (
    <section className="mainblog pt-top pt-btm">
      <div className="container">
        <div className="flex spce-btwn">
          <div className="left">
            <div className="flex">
              {blogs.map((blogEl) => {
                return (
                  <div className="blog-wrap mb-35" key={blogEl.id}>
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
            </div>
          </div>
          <div className="right">
            <div className="search">
              <input type="search" placeholder="search" />
              <span className="fasearch"> <FaSearch /> </span>
            </div>
            <div className="latest-posts">
              <h4><span>Latest</span> Posts</h4>
              {
                blogs.map((BlogMainEl, Index) => {
                  if (Index < 5) {
                    return (
                      <div className="box" key={BlogMainEl.id}>
                        <div className="flex spce-btwn">
                          <div className="img">
                            <img src={BlogMainEl.img} alt="" />
                          </div>
                          <div className="contant">
                            <h5>{BlogMainEl.heading}</h5>
                            <div>
                              <span> <FaRegCalendarAlt /></span>
                              <span>{BlogMainEl.date}</span>
                            </div>

                          </div>
                        </div>
                      </div>
                    )
                  }
                  else{}

                })
              }


            </div>
            <div className="categories">
              <h4>Categories</h4>
              <ul>
                <li>Application Testing</li>
                <li>Artifical Intelligence</li>
                <li>Digital Technology</li>
                <li>IT Services</li>
                <li>Software Development</li>
                <li>Web Development</li>
              </ul>

            </div>




          </div>
        </div>
      </div>
    </section>
  )
}
