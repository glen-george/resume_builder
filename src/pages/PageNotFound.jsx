import React from 'react'
import { MdErrorOutline } from "react-icons/md";


function PageNotFound() {
  return (
    <>
    <div style={{minHeight:"100vh " , backgroundColor:"#cccccc", color:"#4d4d4d"}} className='mt-5 d-flex justify-content-center align-items-center' >
      <div className="container  text-center">

        <img src="https://clipart-library.com/images/pco5xapqi.png" alt="error-image"  style={{ width: "200px", maxWidth: "100%", height: "auto" }} />
        <h1 className='fs-1 gap-2  d-flex  justify-content-center align-items-center'>404   <MdErrorOutline /></h1>
        <h3  className='fs-3'>Oops..Page Not Found</h3>
        <p className='mt-4'>The Page you are looking for does't exist or an other error occured <br></br>
        Go back or head over to main page  toi choose a new direction</p>
        
      </div>
    </div>
      
    </>
  )
}

export default PageNotFound
