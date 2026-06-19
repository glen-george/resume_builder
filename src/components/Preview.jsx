import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function Preview({userData}) {
  console.log(userData);
  
  return (
    <>
    <div className="container w-100 ">
    <h3>{userData.fullname}</h3>
    <h4>{userData.jobtitle}</h4>
    <p>{userData.contact} </p>
    <p>{userData.email}</p>
    <p>{userData.linkedin} </p>
    <p>{userData.github} </p>
    <p>{userData.location}</p>

    <Divider>Proffesional Summary</Divider>

    <p>{userData.summary}</p>
    <Divider>Technical Skills</Divider>


    {
      userData?.skills?.map((skill)=>(
 <span><Button key={skill}  variant="text"> {skill} </Button></span>
      ))
    }
   
    
    
    <Divider>Education</Divider>

    <p>{userData.degree}</p>
    <p>{userData.university}</p>
    <p>{userData.passout}</p>

    </div>
    </>
  )
}

export default Preview
