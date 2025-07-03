import React from 'react'
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
    <section className="container-fluid" id='SupportHero'>
      <div className="p-3" id='supportWrapper'>
        <h4 >Support Portal</h4>
        <Link to={""}>Track tickets</Link>
      </div>
      <div className="row p-5 m-3" >
      <div className="col-lg-6 p-3">
        <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
        <input type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected' />
        <br />
        <Link to={""}>Track account opening</Link>
        <Link to={""}>Track segment activation</Link>
        <Link to={""}>Intraday margins</Link>
        <Link to={""}>Kite user manual</Link>

      </div>
      <div className="col-lg-6 p-3">
        <h1 className='fs-3'>Featured</h1>
        <ol>
          <li><Link to={""}>Exclusion of F&O contracts on 8 securities from August 29, 2025</Link></li>
          <li><Link to={""}>Revision in expiry day of Index and Stock derivatives contracts</Link></li>
        </ol>
      </div>
      </div>
    </section>
  
  )
}
