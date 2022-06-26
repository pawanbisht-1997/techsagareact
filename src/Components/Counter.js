import React from 'react'
window.addEventListener("scroll", () => {
    const number = document.getElementsByClassName('number');
    console.log(number);
    let i;
    for(i=0; i<number.length;i++){
        const con_Position = number[i].getBoundingClientRect().top;
        const scr_position = window.innerHeight;
        if(con_Position < scr_position){
            const speed = 1000;
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
                    }, 1);
                } else {
                    elem.innerText = Math.ceil(value);
                }
            }
        }
    }


})

export const Counter = () => {
  return (
    <section className="incremental_counter">
        <div className="container">
            <div className="cards">
                <div className="card">
                    <img src="./Assets/icon/counter1.png" alt="" />
                    <h3><span className="number" data-target="920">0</span> +</h3>
                    <p>PROJECT COMPLETED</p>
                </div>
                <div className="card">
                <img src="./Assets/icon/counter2.png" alt="" />
                    <h3><span className="number" data-target="920">0</span> +</h3>
                    <p>PROJECT COMPLETED</p>
                </div>
                <div className="card">
                <img src="./Assets/icon/counter3.png" alt="" />
                    <h3><span className="number" data-target="920">0</span> +</h3>
                    <p>PROJECT COMPLETED</p>
                </div>
                <div className="card">
                <img src="./Assets/icon/counter4.png" alt="" />
                    <h3><span className="number" data-target="920">0</span> +</h3>
                    <p>PROJECT COMPLETED</p>
                </div>
            </div>
        </div>
    </section>

  )
}
