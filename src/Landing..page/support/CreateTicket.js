import React from "react";
import { Link } from "react-router-dom";
function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-muted">To create a ticket, select a relevant topic</h1>
        <div className="col-lg-4 p-5 mt-2 mb-2">
          <h4 className=" text-muted">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Resident individual
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Minor
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Non Resident Indian (NRI)
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership, HUF and LLP
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Glossary
          </Link>
          <br />
        
        </div>
        <div className="col-lg-4 p-5 mt-2 mb-2">
          <h4 className=" text-muted">
           <i class="fa-regular fa-user"></i> Your Zerodha Account
          </h4>
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account modification
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Client Master Report (CMR) and Depository Participant (DP)
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Nomination
          </Link>
          <br />
          
        </div>
        <div className="col-lg-4 p-5 mt-2 mb-2">
          <h4 className=" text-muted">
          <i class="fa-solid fa-lines-leaning"></i> Kite
          </h4>
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           IPO
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Trading FAQs
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Margin Trading Facility (MTF) and Margins
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charts and orders
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Alerts and Nudges
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
          General
          </Link>
          <br />
        </div>
        <div className="col-lg-4 p-5 mt-2 mb-2">
          <h4 className=" text-muted">
           <i class="fa-regular fa-box"></i> Funds
          </h4>
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add money
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
          Withdraw money
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Add bank accounts
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            eMandates
          </Link>
          <br />
          
        </div>
        <div className="col-lg-4 p-5 mt-2 mb-2">
          <h4 className=" text-muted">
            <i class="fa-solid fa-at"></i> Console
          </h4>
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Portfolio
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Corporate actions
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
          Funds statement
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
          Reports
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Profile
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Segments
          </Link>
          
          <br />
        </div>
        <div className="col-lg-4 p-5 mt-2 mb-2">
          <h4 className=" text-muted">
            <i class="fa-solid fa-coins"></i> Coin
          </h4>
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Mutual funds
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            National Pension Scheme (NPS)
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Features on Coin
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Payments and Orders
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
          General
          </Link>
          <br />
          
          
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;