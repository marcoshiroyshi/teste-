import React from 'react'

function Form() {
  return (
    <div className="mt-24">
	    <div className="container__item">
		    <form className="flex items-center ">
			    <input type="email" className="shadow h-10 w-56" placeholder="Insir seu e-mail" />
			    <button type="button" className="w-52 h-10 text-white bg-customYellow">Assinar newsletter</button>
		    </form>
	    </div>
    </div>
  )
}

export default Form