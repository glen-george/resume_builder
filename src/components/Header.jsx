import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { FaHistory } from "react-icons/fa";



function Header() {

    const title = "An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,fontWeight:600 }}>
            <Link to={"/"}  style={{textDecoration:"none",color:"white"}}>Resume buider.AI</Link>
          </Typography>


          <div className='d-flex gap-5'>
            <Link to={"/History"} className='text-white text-decoration-none ' >History<FaHistory className='ms-2' /></Link>
           <Tooltip title={title} sx={{fontWeight:600}} >ABOUT US</Tooltip>
          </div>



      
           
        </Toolbar>
      </AppBar>
    </Box>


    </>
  )
}

export default Header
