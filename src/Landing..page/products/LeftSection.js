import React from 'react'
import { Link } from 'react-router-dom'
export default function LeftSection({ImageUrl,heading,description,tryDemo,learnMore,googlePlay,appStore
}) {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-lg-6">
         <img src={ImageUrl} style={{width:"80%"}} alt="" />
        </div>
        <div className="col-lg-6 mt-5 p-5 ">
          <h1>{heading}</h1>
          <p>{description}</p>
         <div><Link to={tryDemo} >Try Demo</Link>
         <Link to={learnMore} style={{ marginLeft: "50px" }}>Learn More</Link></div>
        <div className='mt-3'> <Link to={googlePlay}><img src="media/googlePlayBadge.svg" alt="" /></Link>
         <Link to={appStore} style={{ marginLeft: "50px" }}><img src="media/appstoreBadge.svg" alt="" /></Link></div>
    
        </div>
      </div>
    </div>
  )
}
