import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaEdit } from "react-icons/fa";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import jobRole from "../assets/jobRole.json";
import { IoMdCloseCircle } from "react-icons/io";
import { updateResumeAPI } from "../service/allAPI";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};

function Edit({ userData, setuserData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const skillRef = useRef();

  console.log(userData);

  const addSkill = (skill) => {
    console.log(skill);

    if (skill) {
      if (
        userData?.skills
          ?.map((item) => item.toLowerCase())
          ?.includes(skill.toLowerCase())
      ) {
        alert(`${skill}Already Exist add another!!!`);
      } else {
        setuserData({ ...userData, skills: [...userData.skills, skill] });
      }
    } else {
      alert("Enter Skill");
    }
  };
  const removeSkills = (skill) => {
    setuserData({
      ...userData,
      skills: userData?.skills?.filter((item) => item != skill),
    });
  };

  console.log(userData);

  const handleUpdateResume = async () => {
    const {
      fullname, location,jobtitle,email, contact, linkedin,github, degree,university, passout, skills, summary,} = userData;
    console.log(fullname,location,jobtitle,email,contact,linkedin,github,degree,university,passout,skills,summary,);
    if (fullname &&location &&jobtitle &&email &&contact &&linkedin &&github &&degree &&university &&passout &&skills.length != 0 &&summary) 
      {
      // alert(`Ready for API Call`)

      try {
        const result = await updateResumeAPI(userData.id,userData);
        console.log(result);

        if (result.status == 200) {
          handleClose()

          Swal.fire({
            title: "Resume Updated succesfully !",
            text: "Click ok to view",
            icon: "success",
          });

          
        } else {
          alert("Something went wrong")
        }
      } catch (error) {
        console.log(error);
       alert("Something went wrong")
      }
    } else {
      alert("Fill the form Compleletly")
    }
    const result = await updateResumeAPI(userData.id, userData);

    console.log(result);
  };

  return (
    <>
      <div>
        <button onClick={handleOpen} className="btn fs-3 me-2">
          <FaEdit />
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Resume Details
            </Typography>
            <Box>
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
                      Chose job Title
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Choose job Title"
                      value={userData.jobtitle}
                      onChange={(e) =>
                        setuserData({ ...userData, jobtitle: e.target.value })
                      }
                    >
                      {jobRole.jobRoles.map((job, index) => (
                        <MenuItem key={index} value={job}>
                          {job}
                        </MenuItem>
                      ))}
                      <MenuItem>Software Developer</MenuItem>
                      <MenuItem>Full Stack Developer</MenuItem>
                      <MenuItem>Python Developer</MenuItem>
                      <MenuItem>React Developer</MenuItem>
                      <MenuItem>Ui Ux Designer</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Box>
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

            <div className="mt-3">
              <h3>Skills</h3>
              <div className="d-flex justify-content-between align-items-center">
                <input
                  ref={skillRef}
                  type="text"
                  placeholder="add skill "
                  className="form-control"
                />
                <Button
                  onClick={() => addSkill(skillRef.current.value)}
                  className="btn"
                >
                  Add
                </Button>
              </div>
              <div className="mt-4">
                <h5>Added Skills:</h5>
                <div>
                  {userData?.skills?.map((skill, index) => (
                    <span>
                      {skill}
                      <Button variant="text" className="btn  me-1 border-0">
                        <IoMdCloseCircle
                          onClick={() => removeSkills(skill)}
                          className="text-danger"
                        />
                      </Button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h3>Summary</h3>
              <TextField
                value={userData.summary}
                onChange={(e) =>
                  setuserData({ ...userData, summary: e.target.value })
                }
                className="w-100"
                id="outline-basic"
                label="Summary"
                variant="outlined"
              ></TextField>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <Button
                onClick={handleUpdateResume}
                className="btn"
                style={{ backgroundColor: "black", color: "white" }}
              >
                Update
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Edit;
