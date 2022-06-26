import React from 'react'
const Fourservices = () => {
    const min_service =[
        {
            id:1,
            icon:`./Assets/icon/1.png`,
            title:`IT Staffing & Recruiting`,
            des:`Techsaga's group of sharpened recruiters has positioned heaps of professional applicants withinside the IT marketplace to attain the commercial enterprise desires of our clients.`,
        },
        {
            id:2,
            icon:`./Assets/icon/2.png`,
            title:`IT Staffing & Recruiting`,
            des:`Techsaga's group of sharpened recruiters has positioned heaps of professional applicants withinside the IT marketplace to attain the commercial enterprise desires of our clients.`,
        },
        {
            id:3,
            icon:`./Assets/icon/3.png`,
            title:`IT Staffing & Recruiting`,
            des:`Techsaga's group of sharpened recruiters has positioned heaps of professional applicants withinside the IT marketplace to attain the commercial enterprise desires of our clients.`,
        },
        {
            id:4,
            icon:`./Assets/icon/4.png`,
            title:`IT Staffing & Recruiting`,
            des:`Techsaga's group of sharpened recruiters has positioned heaps of professional applicants withinside the IT marketplace to attain the commercial enterprise desires of our clients.`,
        },
    ]
    return (

        <section class="four-service-box pt-btm pt-top">
        <div class="container">
            <div class="flex spce-btwn align-center">
                    <div class="left">
                       <img src="./Assets/img/four-service.jpg" alt='hello' class="img-fluid" />
                   </div> 
                   <div class="right flex spce-btwn">
                     {min_service.map((serEl)=>
                         {
                             return(
                                <div class="box text-center" key={serEl.id}>
                                <img src={serEl.icon} alt="service box" />
                                <h4>{serEl.title}</h4>
                                <p>{serEl.des}</p>
                            </div>
                             )
                         }
                     )
                     }
                 </div>
            </div>
        </div>
    </section>
    )
}

export default Fourservices;

