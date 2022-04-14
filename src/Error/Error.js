import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
  return(
    <section className='error-page'>
      <p className='error-message'> We're sorry, this page does not exist. Please click home to go back to top stories.</p> 
      <Link to='/'>
        <button>Home</button>
      </Link> 
    </section>
  )
}

export default Error;