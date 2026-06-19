import React, {useState} from 'react'
import UserInput from "../components/UserInput"
import Preview from '../components/Preview'

function Form() {

  const[userData , setuserData] = useState({
  fullname :"",
  location :"",
  jobtitle :"",
  email :"",
  contact :"",
  linkedin :"",
  github :"",
  degree :"",
  university :"",
  passout :"",
  skills:[],
  summary :"",
  })

  return (
    <div className='container my-5 pt-5'>
      <div className="row">
        <div className="col-lg-6" ><UserInput userData={userData} setuserData={setuserData} /></div>
        <div className="col-lg-6">{userData.fullname && < Preview   userData={userData} />}</div>
      </div>
    </div>
  )
}

export default Form
