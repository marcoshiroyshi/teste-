import React from 'react'
import Nav from '../Nav'
import Form from '../Form'


function Hero() {
  return (
    <section className=" h-screen m-auto w-4/5 ">	
       <Nav/>
        <div className='grid grid-rows-2 md:grid-cols-2'>
            <div className='w-9/12 m-auto flex items-center justify-center flex-col lg:items-start'>
                <span>Sua casa com as</span>
                <h1>melhores plantas</h1>
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <Form/>
            </div>
            <div className=''>
              <img className='hidden lg:block lg:w-9/12 lg:-ml-52'
              src="./imgs/img-hero.png" alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Hero