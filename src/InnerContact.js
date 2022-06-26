import React from 'react'

export const InnerContact = () => {
    return (
        <section className="InnerContact">
            <div className="flex spce-btwn">
                <div className="img">
                    <img src="./Assets/img/innder_contact.webp" alt=""  className='img-fluid h-100'/>
                </div>
                <div className="contant">
                     <span>LET'S TALK</span>
                     <h2>Request a Free Quote</h2>

                    <form>
                        <div className="flex spce-btwn">
                                <div class="form-group">
                                     <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                     <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                     <input type="Text" class="form-control" aria-describedby="emailHelp" placeholder="Phone Number" />
                                </div>
                                <div class="form-group">
                                     <input type="Text" class="form-control" aria-describedby="emailHelp" placeholder="Your Website" />
                                </div>
                                <div class="form-group text-area">
                                     <textarea name="" id="" cols="30" rows="6"></textarea>
                                </div>
                                <input type="submit"   className="submit"/>

                        </div>
                    </form>
                </div>
            </div>
     </section>
  )
}
