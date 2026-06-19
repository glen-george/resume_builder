import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import jobRole from "../assets/jobRole.json";
import jobSkills from "../assets/jobSkills.json";
import summaries from "../assets/summaries.json";
import Swal from "sweetalert2";
import { addResumeAPI } from "../service/allAPI";
import { useNavigate } from "react-router-dom";

function UserInput({ userData, setuserData }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());


  const navigate = useNavigate()

  const steps = [
    "Basic Informations",
    "Contact Details",
    "Educational Details",
    "Review & Submit",
  ];

  console.log(userData);

  const jobTitles = jobRole.jobRoles;
  console.log(jobTitles);

  const isStepOptional = (step) => {
    return null;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setuserData({
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
  };

  const genearteAiData = () => {
    setuserData({
      ...userData,
      skills: jobSkills[userData.jobtitle],
      summary: summaries[userData.jobtitle],
    });
    handleNext();
  };

  // handle Add Resume
  const handleAddResume = async () => {
   const {
      fullname, location,jobtitle,email, contact, linkedin,github, degree,university, passout, skills, summary,} = userData;
    console.log(fullname,location,jobtitle,email,contact,linkedin,github,degree,university,passout,skills,summary,);
    if (fullname &&location &&jobtitle &&email &&contact &&linkedin &&github &&degree &&university &&passout &&skills.length != 0 &&summary) {
      // alert(`Ready for API Call`)

      try {
        const result = await addResumeAPI(userData);
        console.log(result);


        if (result.status == 201) {
          Swal.fire({
            title: "Resume added succesfully !",
            text: "Click ok to view",
            icon: "success",
          });

          const resumeid = result.data.id
          navigate (`/view/${resumeid}/resume`)

        } else {
          Swal.fire({
            icon: "error",
            title: "Oops.Soemthing went wrong..",
            text: "Pls fill  the form Completely!",
          });
        }


      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops.Soemthing went wrong..",
          text: "Pls fill  the form Completely!",
        });
      }
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops.Soemthing went wrong..",
        text: "Pls fill  the form Completely!",
      });
    }

    // alert(`Pls fill  the form Completely`)
  };

  const renderStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <h3>Personal Details</h3>
            <div className="p-3 d-flex flex-column gap-2">
              <TextField
                value={userData.fullname}
                onChange={(e) =>
                  setuserData({ ...userData, fullname: e.target.value })
                }
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
              />
              <TextField
                value={userData.location}
                onChange={(e) =>
                  setuserData({ ...userData, location: e.target.value })
                }
                id="outlined-basic"
                label="Location"
                variant="outlined"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Choose job Title

                </InputLabel>
                <Select
                  defaultValue={""}
                  onChange={(e) =>
                    setuserData({ ...userData, jobtitle: e.target.value })
                  }
                  label="Choose job Title"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  {jobTitles.map((job, index) => (
                    <MenuItem key={index} value={job}>
                      {job}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h3>Contact Details</h3>
            <div className="p-3 d-flex flex-column gap-2">
              <TextField
                value={userData.email}
                onChange={(e) =>
                  setuserData({ ...userData, email: e.target.value })
                }
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                value={userData.contact}
                onChange={(e) =>
                  setuserData({ ...userData, contact: e.target.value })
                }
                id="outlined-basic"
                label="Contact"
                variant="outlined"
              />
              <TextField
                value={userData.linkedin}
                onChange={(e) =>
                  setuserData({ ...userData, linkedin: e.target.value })
                }
                id="outlined-basic"
                label="LinkedIn link"
                variant="outlined"
              />
              <TextField
                value={userData.github}
                onChange={(e) =>
                  setuserData({ ...userData, github: e.target.value })
                }
                id="outlined-basic"
                label="Git Hub"
                variant="outlined"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3>Educational Details</h3>
            <div className="p-3 d-flex flex-column gap-2">
              <TextField
                value={userData.degree}
                onChange={(e) =>
                  setuserData({ ...userData, degree: e.target.value })
                }
                id="outlined-basic"
                label="Bachelor's Degree"
                variant="outlined"
              />
              <TextField
                value={userData.university}
                onChange={(e) =>
                  setuserData({ ...userData, university: e.target.value })
                }
                id="outlined-basic"
                label="University/College"
                variant="outlined"
              />
              <TextField
                value={userData.passout}
                onChange={(e) =>
                  setuserData({ ...userData, passout: e.target.value })
                }
                id="outlined-basic"
                label="Year of Graduation"
                variant="outlined"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3>Review & Submit </h3>
            <div>
              <p>
                Our AI will generate Skills & Summary according to your Job Role
                Click the <b>Generate AI Skill and Summary </b>button to
                proceed..
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              ></Button>

              <Button onClick={handleReset}>Reset</Button>
              <Button onClick={handleAddResume}>FINISH</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

            <Box>{renderStepContent(activeStep)}</Box>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              {/* <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Generate AI Skill and Summary" : "Next"}
              </Button> */}

              {activeStep == steps.length - 1 ? (
                <Button onClick={genearteAiData} color="inherit" sx={{ mr: 1 }}>
                  Generate AI Skills & Summary
                </Button>
              ) : (
                <Button onClick={handleNext} color="inherit" sx={{ mr: 1 }}>
                  Next
                </Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
}

export default UserInput;
