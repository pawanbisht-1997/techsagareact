import React from 'react'
import { FaPhoneSquareAlt,FaMailBulk,FaLocationArrow } from "react-icons/fa";


export const MainContact = () => {
   const maincontact=[{
          Id:1,
          fa:<FaPhoneSquareAlt/>,
          heading:`Phone Number`,
          para:`+1(856) 888-9026`,
        },
        {
            Id:1,
            fa:<FaMailBulk />,
            heading:`Email Address`,
            para:`info@techsaga.co.in`,
     },
     {
        Id:1,
        fa:<FaLocationArrow />,
        heading:`Office Address`,
        para:`631, Allen Drive Goodlettsville Tennessee,37072, United State`,
 },

        
        ]

  return (
 <section className="maincontact pt-top mb-35">
 <div className="container">
       <div className="company-info">
           <div className="flex spce-btwn">
               {
                maincontact.map((maincontEl)=>{
                      return(
                        <div className="box" key={maincontEl}>
                     <span className='fa'>{maincontEl.fa}</span>
                     <h4>{maincontEl.heading}</h4>
                     <p>{maincontEl.para}</p>
               </div>
                      )
                })
               }
           </div>
       </div>
 </div>
 </section>
  )
}
