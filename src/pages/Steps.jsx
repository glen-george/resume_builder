import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

function Steps() {
  return (
    <>
      <div style={{minHeight:"80vh"}} className='my-5 pt-5'>
          <h1 className='text-center '>Create an ATS Friendly Resume in just Minitues with AI </h1>
          <div className="container my-5">
            <div className="row ">
              <div className="col-md-1"></div>
              <div className="col-md-4 rounded p-5 shadow text-center">
                <IoDocumentText className='fs-1 text-primary mb-3' />
                <h4>Add your Details</h4>
                <p>Our Ai will generate Skill and Summary</p>
                <h5>Step 1</h5>

              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4 rounded p-5 shadow text-center mt-md-0 mt-5">
              <IoMdDownload className='fs-1 text-danger mb-3' />
              <h4>Download your Resume</h4>
                <p>Download your PDF an start applying</p>
                <h5>Step 2</h5>

              </div>
              <div className="col-md-1"></div>
            </div>

            <div className='text-center mt-5'>
              <Link to={'/Form'}  className="btn btn-text-light" style={{backgroundColor:"black",color:"white"}} >LETS START</Link>

            </div>

          </div>
      </div>
    </>
  )
}

export default Steps
