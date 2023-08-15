import React, { useEffect, useState } from 'react'
import { IoArrowBackSharp } from 'react-icons/io5';
import { AiFillPlusCircle } from 'react-icons/ai';
import pic from '../src/Pictures/807852f3bdbcd6c448516090ea31776b.png'
import {
  Link, useNavigate
} from "react-router-dom";
import '../src/compo/style2.css';
import { upload } from '@testing-library/user-event/dist/upload';


function Add() {
  const [values, setValues] = useState({
    name: '',
    job: ''
  })
  const [fileUrl, setFileUrl] = useState(pic);
  function handlePic(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setFileUrl(dataUrl);
      };

      reader.readAsDataURL(file);
    }
  }

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
 
    const numberOfItems = localStorage.length;
    const userId = numberOfItems + 1;
    localStorage.setItem(
      userId,
      JSON.stringify({
        ...values,
        fileUrl
      })


    )
  
    navigate('/');
  }
  const UploadFiles = () => {
    document.getElementById('selectFile').click();
  }
  return (
    <body>
      <div>
        <Link to="/"><IoArrowBackSharp className='arroBack' /></Link>
        <div>
          <form onSubmit={handleSubmit}>
            <img src={fileUrl} width={"200px"} height={"200px"} />
            <label onClick={UploadFiles}><AiFillPlusCircle /></label>
            <input id='selectFile' type="file" onChange={handlePic} style={{ display: "none" }} className='picInput'></input>

            <input type='text' onChange={e => setValues({ ...values, name: e.target.value })} placeholder='Full Names' />

            <input type='text' onChange={e => setValues({ ...values, job: e.target.value })} placeholder='Job Title' />

            <button>Add Member</button>
          </form>
        </div>
      </div>

    </body>
  );
}
export default Add;


