import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='container-fluid text-light p-5 ' style={{minHeight :"350px", backgroundColor:"black",color:"white"}}>
        <div className="row">
          <div className="col-4">
            <h4>Ai Resume Builder</h4>
            <p>An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF.</p>
          </div>
          <div className="col-4"></div>

          <div className="col-4">

            <h4>Conatct Us</h4>
            <p> <MdAttachEmail />resumebuilder@gmail.com</p>
            <p> <FaPhoneAlt />95979245885</p>

            <h5>Connect With Us</h5>
            <div className='my-3 fs-5 d-flex gap-3'>
              <FaInstagram />
              <FaFacebook />
              <FaWhatsapp />

            </div>
          </div>
        </div>
        
    <h3 className='text-center fs-5'>Design & build with ❤️ using React</h3>

      </div>

    </>
  )
}

export default Footer
