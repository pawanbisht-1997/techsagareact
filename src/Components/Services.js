import React from 'react'
import { FaReact} from 'react-icons/fa';
const Services = (prop) => {
    const service =[
        {
            id:1,
            img:`./Assets/img/agile.jpg`,
            title:`Agile Transformation`,
            description:`Strategic understanding of wherein your enterprise is nowadays and wherein it desires to go.`,
        },
        {
            id:2,
            img:`./Assets/img/devops.jpg`,
            title:`Devops Methodology`,
            description:`Recognizing the right to set up a quick and hassle-loose workflow.`,
        },
        {
            id:3,
            img:`./Assets/img/application-development.jpg`,
            title:`Application Development`,
            description:`Building a fixed of packages consistent with the necessities of your business.`,
        },
        {
            id:4,
            img:`./Assets/img/application-maintaince.jpg`,
            title:`Application Maintenance`,
            description:`Updating amendments uniformly to the system for higher operation.`,
        },
        {
            id:5,
            img:`./Assets/img/iot-development.jpg`,
            title:`IoT Development`,
            description:`Expanding and reshaping your entire business to bring out a possibility of advancement.`,
        },
        {
            id:6,
            img:`./Assets/img/digital-marketing.jpg`,
            title:`Digital Marketing`,
            description:`Apprehending the pre-eminence of supplying enterprises on virtual platforms.`,
        },
        {
            id:6,
            img:`./Assets/img/digital-marketing.jpg`,
            title:`Digital Marketing`,
            description:`Apprehending the pre-eminence of supplying enterprises on virtual platforms.`,
        },
        {
            id:6,
            img:`./Assets/img/digital-marketing.jpg`,
            title:`Digital Marketing`,
            description:`Apprehending the pre-eminence of supplying enterprises on virtual platforms.`,
        },
        {
            id:6,
            img:`./Assets/img/digital-marketing.jpg`,
            title:`Digital Marketing`,
            description:`Apprehending the pre-eminence of supplying enterprises on virtual platforms.`,
        },
        {
            id:6,
            img:`./Assets/img/digital-marketing.jpg`,
            title:`Digital Marketing`,
            description:`Apprehending the pre-eminence of supplying enterprises on virtual platforms.`,
        },
        {
            id:6,
            img:`./Assets/img/digital-marketing.jpg`,
            title:`Digital Marketing`,
            description:`Apprehending the pre-eminence of supplying enterprises on virtual platforms.`,
        },
        {
            id:6,
            img:`./Assets/img/digital-marketing.jpg`,
            title:`Digital Marketing`,
            description:`Apprehending the pre-eminence of supplying enterprises on virtual platforms.`,
        },
        {
            id:6,
            img:`./Assets/img/digital-marketing.jpg`,
            title:`Digital Marketing`,
            description:`Apprehending the pre-eminence of supplying enterprises on virtual platforms.`,
        },
        {
            id:6,
            img:`./Assets/img/digital-marketing.jpg`,
            title:`Digital Marketing`,
            description:`Apprehending the pre-eminence of supplying enterprises on virtual platforms.`,
        },
        {
            id:6,
            img:`./Assets/img/digital-marketing.jpg`,
            title:`Digital Marketing`,
            description:`Apprehending the pre-eminence of supplying enterprises on virtual platforms.`,
        },

    ]
    return (
        <section className="service pt-top pt-btm">
        <div className="container">
            <span className="title">PREMIUM SERVICES</span>
            <h2>Our Latest Services</h2>
            <div className="flex spce-btwn">
                 {service.map((serEl, index) =>{
                     if(index < prop.activeCard){
                        return(
                        <div className="box" key={serEl.id}>
                        <div className="img">
                            <img src={serEl.img} alt="service" className="img-fluid" />
                             <div className="icon-sec">
                             <FaReact />
                             </div>
                        </div>
                        <div className="box-content">
                        <h3>{serEl.title}</h3>
                        <p>{serEl.description}</p>
                        </div>
                    
                        <div className="outer-readmore">
                           <div className="inner-readmore">
                           <div className="read-more">
                               <a href="/">Read More</a>
                           </div>
                           </div>
                        </div>
                       </div>
                    )
                     }
                     else{
                        return;
                 }
                        
                 } )

                   
                 }
            </div>
        </div>
    </section>
    )
}

export default Services;

