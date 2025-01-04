import React from 'react'

function Plants() {
  return (
    <div className='m-auto min-w-96 flex border border-solid border-black'>
        <img 
        className='h-full'
        src="./imgs/planta1.png" alt=""/>
        <div className='w-6/12 h-full ml-2 mt-5'>
            <h1 className='w-3/12 text-3xl'>Ajuga Reptans</h1>
            <p>R$20,00</p>
            <button>Comprar</button>            
        </div>
    </div>
  )
}

export default Plants