import React from 'react'
export const OurSolutions = () => {
    const solutions = [
    {
      id: 1,
      img: `./Assets/icon/solutions-one.png`,
      heading: `COMPETENCE LEARNING`,
      des: `We aspire to bring proficiency with our learning technique and aptness to correctness.`,
    },
    {
      id: 1,
      img: `./Assets/icon/solutions-one.png`,
      heading: `COMPETENCE LEARNING`,
      des: `We aspire to bring proficiency with our learning technique and aptness to correctness.`,
    },
    {
      id: 1,
      img: `./Assets/icon/solutions-one.png`,
      heading: `COMPETENCE LEARNING`,
      des: `We aspire to bring proficiency with our learning technique and aptness to correctness.`,
    },
    {
      id: 1,
      img: `./Assets/icon/solutions-one.png`,
      heading: `COMPETENCE LEARNING`,
      des: `We aspire to bring proficiency with our learning technique and aptness to correctness.`,
    },
    {
      id: 1,
      img: `./Assets/icon/solutions-one.png`,
      heading: `COMPETENCE LEARNING`,
      des: `We aspire to bring proficiency with our learning technique and aptness to correctness.`,
    },
    {
      id: 1,
      img: `./Assets/icon/solutions-one.png`,
      heading: `COMPETENCE LEARNING`,
      des: `We aspire to bring proficiency with our learning technique and aptness to correctness.`,
    },
] 
     return (
    <section className="solutions pt-top pt-btm">
        <div className="container">
           <h2>Delivering Excellence in our Solutions.</h2>
              <div className="flex spce-btwn">
                {
                 solutions.map((solEl)=>{
                    return(
                        <div className="box" key={solEl.id}>
                     <img src={solEl.img} alt="" />
                     <h5>{solEl.heading}</h5>
                     <p>{solEl.des}</p>
                </div>
                    )
                 })
                }
              </div>
        </div>
    </section>
  )
}
