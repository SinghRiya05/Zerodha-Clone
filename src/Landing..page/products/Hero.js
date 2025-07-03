import React from 'react'
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
    <div className='container border-bottom mb-5'>
      <div className="row text-center mt-5 p-3">

      <h1 >Technology</h1>
     <h3 className='mt-3 fs-4 text-muted'>Sleek, modern and intutive trading platforms</h3>
     <p className='mt-3 mb-5'>Check out our {" "} <Link style={{textDecoration:"none"}} to="">investment offerings{" "}
      <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p>
      </div>

    </div>
  )
}
