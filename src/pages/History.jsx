import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";
import { getAllResumeAPI ,deleteResumeAPI } from '../service/allAPI';







function History() {


  const [allResumes,setallResumes] = useState([])


const getAllResume= async()=>{
const result = await getAllResumeAPI()
console.log(result);

setallResumes(result?.data)

}
console.log(allResumes);


const handleDeleteResume = async(resumeID)=>{
  const result = await deleteResumeAPI(resumeID)
  console.log(result);
  
}


  useEffect( ()=>{
  
    getAllResume()

  },[])
  return (
    <>
    
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h3>Download Resume History</h3>
          <Link to={"/Form"}>Back</Link>
        </div>

        <div className="row">


          {

             allResumes?.map((resume,index)=>(


               <div key={index} className="col-lg-4  mb-3 mt-3 rounded shadow">
            <div className='d-flex justify-content-between p-3'>
              <h6>Review at :12:15:20</h6>
              <button onClick={()=>handleDeleteResume(resume?.id)} className='btn fs-5 text-danger'><MdDeleteOutline /></button>


            </div>

            <div className='p-3'>
              <h2>Name : {resume?.fullname} </h2>
              <p> {resume?.jobtitle}</p>

            </div>

          </div>
             ))

          }
          
        </div>

<div className='text-center fw-bolder fs-1 mb-3'>
No resume downloaded yet
</div>
        
      </div>
    </>
  )
}

export default History
