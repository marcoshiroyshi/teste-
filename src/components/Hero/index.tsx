import React from 'react'
import Nav from '../Nav'
import Form from '../Form'


function Hero() {
  return (
    <section className="px-2 h-60vh xl:h-screen m-auto">	
       <Nav/>
        <div className='grid grid-rows-2 xl:grid-cols-2'>
            <div className='mt-24 w-11/12 m-auto flex items-center justify-center flex-col xl:items-start'>
                <div className='min-w-9 flex flex-col text-center xl:text-left'>
                  <span className='text-customGray font-normal text-xl'>Sua casa com as</span>
                  <h1 className='text-customGray text-5xl font-black'>melhores plantas</h1>
                  <p className='text-customGray font-normal text-xl mt-5'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                </div>
                <Form/>
            </div>
            <div className=''>
              <img className='hidden xl:block lg:w-9/12 lg:-ml-52'
              src="./imgs/img-hero.png" alt="planta"/>
            </div>
        </div>
    </section>
  )
}

export default Hero