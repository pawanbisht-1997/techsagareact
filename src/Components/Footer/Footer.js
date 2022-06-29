import React from 'react'
import {  FaFacebookF, FaLinkedinIn,FaTwitter } from "react-icons/fa";


export const Footer = () => {
  const footer =[{
      id: 1,
      heading: `IT Services`,
      des1: `Agile Transformation`,
      path1:`/`,
      des2: `Devops`, 
      path2:`/`,
      des3: `DAutomation`, 
      path3:`/`,
      des4:`DApplication Development`,
      path4:`/`, 
      des5:`DIOT Development`,
      path5:`/`,
      des6:`Reduce Infrastructure Cost`,
      path6:`/`,
      des7:`Software Design & Development`,
      path7:`/`,
      des8:`Startup Incubation`,
      path8:`/`,

  },
  {
    id: 2,
    heading: `Industries`,
    des1: `AE-commerce Solution`,
    des2: `Real Estate`, 
    des3: `Professional Services`, 
    des4:`Health Care`, 
    des5:`Media and Entertainment`,
    des6:`Logistics and Transportation`,
    des7:`Travel & Tourism`,
    des8:`Banking & Finance`,
    des9:`Education & E-learning`,
},
{
  id: 3,
  heading: `Company`,
  des1: `Privacy Policy`,
  des2: `Terms and Conditions`, 
  des3: `Contact Us`, 
  des4:`Management Team`, 
  des5:`Careers`,
  des6:`Blog`,

},
]
  return (
    <section className="footer">
      <div className="container">
        <div className="flex spce-btwn">
          <div className="box ft-box">
            <img src="./Assets/img/logo-tech.png" alt="" className="img-fluid"/>
             <p>
             Techsaga Corporation is integrated into the muse of a multifaceted group inherited with a tested tune of experience and eminent talent. 
             </p>
            <ul>
              <li className="address"><span>631, Allen Drive,Goodlettsville Tennessee,37072, United State</span></li>
              <li className="phone"><a href="/"> <span>+1(856) 888-9026</span></a></li>
              <li className="mail"><a href="/"><span>info@techsaga.co.in</span></a></li>
            </ul>
          </div>
          {
            footer.map((footEL)=>{
              return(
                <div className="ft-box" key={footEL.id}>
                <div className="float-right">
                <h4>{footEL.heading}</h4>
            <ul>
              <li><a href="/">{footEL.des1}</a></li>
              <li><a href="/">{footEL.des2}</a></li>
              <li><a href="/">{footEL.des3}</a></li>
              <li><a href="/">{footEL.des4}</a></li>
              <li><a href="/">{footEL.des5}</a></li>
              <li><a href="/">{footEL.des6}</a></li>
              <li><a href="/">{footEL.des7}</a></li>
              <li><a href="/">{footEL.des8}</a></li>
            </ul>
                </div>
          </div>
              )
            })
          }
         
        </div>
         <div className="copy-right">
             <div className="flex spce-btwn">
                  <div className="left">
                    <p>© Copyright 2022. All Rights Reserved.</p>
                  </div>   
                  <div className="right">
                  <div className="social-box">
                 <a href="/"><FaFacebookF /></a>
                 <a href="/"><FaLinkedinIn /></a>
                 <a href="/"><FaTwitter /></a>
                </div>
                  </div>
             </div>
         </div>
      </div>

    </section>
  )
}

export default Footer;