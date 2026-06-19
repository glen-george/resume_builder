import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div style={{height:"100vh " , backgroundRepeat:"no-repeat" , backgroundSize: "cover",
    backgroundPosition: "center",   backgroundImage:'url("https://img.magnific.com/free-photo/smiling-multiracial-coworkers-working-together-office-meeting-have-discussion_93675-134809.jpg?semt=ais_hybrid&w=740&q=80")'}} className=" d-flex justify-content-center align-items-center">

          <div className="row  container-fluid" >
              <div className="col-4"></div>
              <div className="col-4 rounded shadow p-5 text-center text-light" style={{backgroundColor :"rgba(151,152,143,0.7)"}}>
                <h3>Design to get Hired<br></br>
                  Your Skills ,Your Story<br></br>
                  Your Next Job - All in one place

                </h3>
               <Link to={"/Steps"} style={{backgroundColor:"black"}} className='btn text-light mt-4'>Make Resume with AI</Link>

              </div>
              <div className="col-4"></div>
          </div>


      </div>


{/* What is ai resume builder */}

      <div className='container mb-5'>
        <h1 className=' text-center my-5 font-bolder'>What's AI Resume builder </h1>
        <div className="row">
          <div className="col-1"></div>
            <div className="col-5">
              <p>An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
              <p>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
              <p>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly</p>
              <p>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>
              <p>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews</p>
            </div>
              <div className="col-1"></div>
                <div className="col-5">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpCKxsGbmUzgOMYxZpqpAbQezR90nunF36Dg&s" alt="image" width={"100%"} height={"600px"} />
                </div>
        </div>

      </div>




<div style={{backgroundImage:'url("https://www.shutterstock.com/image-photo/multi-ethnic-business-professionals-discussing-600nw-2758698603.jpg")',height:"80vh",  backgroundPosition:"center" ,backgroundSize:"cover", backgroundAttachment:"fixed"}}>
</div>




{/*testimony*/}

<div className='container mb-5'>
  <h1 className='text-center  my-5'>Testimony</h1>
  <div className="row align-items-center">
    <div className="col-1"></div>
    <div className="col-5">
      <h5>Trusted by Proffesional Worldwide</h5>
      <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
      <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
      <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>
    </div>
    <div className="col-1"></div>
    <div className="col-5">
      <div className="row">


        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>


        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>

        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>

        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>

        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>

        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>

        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>

        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>

        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>

        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>

        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div> 

        <div className="col-lg-3">
          <img src="https://iconnect.teamlease.com/GUI/images/4.jpg " alt="userProfile"  className='w-100 p-2' />
        </div>
        






      </div>
    </div>

  </div>

</div>






    </>
  )
}

export default Home
