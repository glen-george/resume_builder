// all API 's 

import commonAPI from "./commonAPI"
// import { serverURL } from "./serverURL"





// add a Resume

export const addResumeAPI = async (reqBody) =>{
    return await commonAPI("POST",`/resumes`,reqBody)
}





// get a   resume 

export const getAParticularResumeAPI = async (resumeID)=>{
   return await commonAPI(
      "GET",
      `/resumes/${resumeID}`,
      ""
   )
}
// update resume
export const updateResumeAPI = async (resumeID,reqBody)=>{
   return await commonAPI("PUT",`/resumes/${resumeID}`,reqBody)    
   
}
// get all reumes
export const getAllResumeAPI = async ()=>{
   return await commonAPI("GET",`/resumes`,"")    
   
}
// delete resumes
export const deleteResumeAPI = async (resumeID)=>{
   return await commonAPI("DELETE",`/resumes/${resumeID}`,"")    
   
}