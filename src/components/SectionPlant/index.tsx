import React from 'react'

function SectionPlant() {
  return (
    <section className='m-auto border border-solid flex items-center justify-center flex-col lg:flex-row xl:w-8/12 shadow '>
        <div className=''>
          <img 
            className=''
            src="./imgs/planta-3.png" 
            alt="planta-3"/>
          </div>
        <div className='w-5/6 border border-solid xl:flex xl:flex-col '>
          <div className='text-center'>
            <span className='text-customGray font-normal tex-center text-xl'>Como conseguir </span>
            <h1 className='text-customGray text-5xl font-black'>minha plantas</h1>
          </div>
            <div className='flex flex-col justify-center'>
              <div className='w-5/12 mt-4 m-auto flex items-center gap-3 justify-start'>
                <span className='h-12 w-12 bg-yellow-200 rounded-full '></span>
                <p className='text-xl'>Escolha suas plantas</p>
              </div>
              <div className='w-5/12 mt-4 m-auto flex items-center justify-start gap-3'>
                <span className='h-12 w-12 bg-yellow-200 rounded-full '></span>
                <p className='text-xl'>Faça seu pedido</p>
              </div>             
              <div className='w-5/12 mt-4 m-auto flex items-center gap-3 justify-start'>
                <span className='h-12 w-12 bg-yellow-200 rounded-full '></span>
                <p className='text-xl'>Aguarde na sua casa</p>
              </div>
            </div>
        </div>
        
    </section>
  )
}

export default SectionPlant