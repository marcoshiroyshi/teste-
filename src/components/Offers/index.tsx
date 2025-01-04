import React from 'react'
import Plants from '../Plants'

function Offers() {
  return (
    <section>
      <div className='mt-12 text-center'>
        <span>Conheça nossas ofertas</span>
        <h1>Ofertas</h1>
      </div>
      <div className='flex flex-wrap gap-7 mt-4'>
        <Plants/>
        <Plants/>
      </div>
    </section>
  )
}

export default Offers