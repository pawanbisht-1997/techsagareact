import React from "react";
const Contact = () => {
  return(
    <section className="contact mt-btm">
      <div class="container">
          <div className="flex spce-btwn">
                <div className="left">
                    <img src="./Assets/img/contact-one.jpg" alt="contact"  />
                </div>
                <div className="right">
                      <h3>Contact our Experienced Staff with just a few clicks.</h3>
                      <div class="dual-btn">
                                <div class="dual-btn-wrap">
                                    <a class="btn-left" href="/"><span>More About</span></a>
                                    <span class="connector"> Or </span>
                                </div>
                                <div class="dual-btn-wrap">
                                    <a class="btn-right" href="/"><span>Contact Us</span></a>
                                </div>
                            </div>
                </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
