
export const Industries = () => {
    const service = [
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
      {
        id: 1,
        img: `./Assets/icon/industries.png`,
        heading: `Automobile`,
        des: `An enterprise that’s indulged in designing, development, creativity, and manufacturing of motor vehicles.`,
      },
    ]
    return (
      <section className="inddustries pt-top pt-btm">
        <div className="container">
          <div className="title">
              OUR INDUSTRIES
          </div>
          <h2>We Ideate, Innovate & Create Technology Solutions in varied Industries</h2>
          <div className="flex">
            {
              service.map((indEl) => {
                return(
                  <div class="industries-wrap" key={indEl.id}>
                    <div class="icon-part">
                      <img src={indEl.img} alt="" />
                    </div>
                    <div class="content-part">
                      <h4>{indEl.heading}</h4>
                      <p class="desc">{indEl.des}</p>
                      <div class="btn-part">
                        <a href="#" target="_blank">Learn More</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
