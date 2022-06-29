
import React from 'react'
window.addEventListener("scroll", () => {
    const number = document.getElementsByClassName('num_about');
    // console.log(number);
    let i;
    for(i=0; i<number.length;i++){
        const con_Position = number[i].getBoundingClientRect().top;
        const scr_position = window.innerHeight - 200;
        if(con_Position < scr_position){
            const speed = 1000000000;
            for(let i= 0; i<number.length;i++){
                incNumber(number[i]);
            }

            function incNumber(elem) {
                let text = +elem.innerText;
                const value = +elem.getAttribute("data-target")
                const inc = value / speed;
                if (text < value) {
                    elem.innerText = Math.ceil(inc + text);
                    setTimeout(() => {
                        incNumber(elem);
                    }, 500);
                } else {
                    elem.innerText = Math.ceil(value);
                }
            }
        }
    }


})
const About = () => {
    return (
        <section class="about pt-top pt-btm">
<div class="container">
<div class="flex spce-btwn">
   <div class="left">
       <span class="title">Our Company</span>
       <h2>An Assertion to Succession</h2>
       <p>Techsaga Corporation is integrated into the muse of a multifaceted group inherited with a tested tune of experience and eminent talent. In the herd of our fellow strategists, designers, and innovators, we're obliged to delightful customer satisfaction.</p>
       <div className="flex space-btwn data">
       <div class="years flex align-center spce-btwn">
           <div class="left">
                <span className="num_about" data-target="10">0</span>  
                <h4>YEARS OF PROGRESSION</h4>
           </div>
           <div class="right">
               <p>Attaining Proficiency & Veracity with an explicit approach to learning.</p>
           </div>
       </div>
       <div class="years flex align-center spce-btwn">
           <div class="left">
                <span className="num_about" data-target="15">0</span><span>k</span>
                <h4>SATISFIED CUSTOMERS</h4>
           </div>
           <div class="right">
               <p>Conquering a paramount of the expert module in accomplishment.</p>
           </div>
       </div>
       </div>
   </div>
   <div class="right">
        <img src="./Assets/img/about.png" alt="about"className="img-fluid" />
   </div>
</div>
</div>
</section>
    )
}

export default About;





