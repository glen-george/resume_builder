import React, { useEffect, useState } from 'react'
import { FaDownload } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { FaStepBackward } from "react-icons/fa";
import Preview from '../components/Preview';
import Edit from '../components/Edit';
import { getAParticularResumeAPI } from '../service/allAPI';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';




function ViewResume() {

const[userData , setuserData] = useState({})
const {id} = useParams()
console.log(id);


const getAResume = async () =>{

  try {
    const result = await getAParticularResumeAPI(id)
    console.log(result);
      console.log(result.data);
    setuserData(result.data)
    
  } catch (error) {
    console.log(error);
    
  }

}
useEffect(()=>{
getAResume()
},[id])


const downloadPDF  = async ()=>{
  const input = document.getElementById("result")//to get id
  const canvas = await html2canvas(input,{scale:2})//convert selected html to canvas
  const imgData = canvas.toDataURL("image/png") //covert canvas into image url

  // pdf
  const pdf = new jsPDF("P","mm","a4")
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (canvas.height* pdfWidth)/canvas.width
  pdf.addImage(imgData,"png",0,0,pdfWidth,pdfHeight)
  pdf.save("resume.pdf")



}
  return (
    <>
      <div className="container">

        <div className="row my-3">

          <div className="col-lg-2">

          </div>

           <div className="col-lg-8">
            <div className='d-flex justify-content-center align-content-center gap-5'>
            <button onClick={downloadPDF} className='btn fs-3 me-2'><FaDownload /></button>

            <Edit userData={userData} setuserData={setuserData} />
                  
            <Link to={"/Form"} className='btn fs-2 me-2'><FaStepBackward /></Link>
            </div>
           </div>
           <div id='result' className='mt-5'><Preview userData={userData} /></div>

            <div className="col-lg-2"></div>

        </div>
      </div>
    </>
  )
}

export default ViewResume
