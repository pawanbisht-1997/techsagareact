import React from 'react'

export const InnerBanner = (prop) => {
  return (
    <section className="innerbanner pt-top pt-btm">
           <h1 className="text-center">{prop.heading}</h1>
    </section>
  )
}
