import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 p-5 mt-5 ">
          <h1 className="mt-5">{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={imageURL} style={{width:"90%"}} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;