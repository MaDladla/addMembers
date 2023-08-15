import React,{useState} from "react";
import { Link,useParams, useNavigate} from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import { AiFillPlusCircle} from 'react-icons/ai';

import '../src/compo/style.css';


function Update() {
 
  const{id} = useParams();
  
  const user = JSON.parse(localStorage.getItem(id));
  console.log(user)
  const [values, setValues]=useState(
     user.name
  )  
  const [value, setValue]=useState(
    user.job
  )

  const [file, setFile] = useState(user.fileUrl);
  console.log(values.job)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setFile(dataUrl);
      };

      reader.readAsDataURL(file);
    }
  };
 
  const navigate= useNavigate();
const handleUpdate = (event) => {
  event.preventDefault();
 
  const numberOfItems = localStorage.length;
  
  localStorage.setItem(
    id,
    JSON.stringify({
     fileUrl:file,
     name:  values,
     job: value
    })
    

  )
navigate('/');
}
const UploadFiles =()=>
  {
    document.getElementById('selectFile').click();
  }

  return(

<body>
<div>

  <p></p>
  <Link to="/"><IoArrowBackSharp className='arroBack'/></Link>
  <form onSubmit={handleUpdate} >
    <img src={file} />
    <label onClick={UploadFiles}><AiFillPlusCircle/></label>
    <input id='selectFile'  type="file" onChange={handleFileChange}  style={{display:"none"}}  ></input>

<input type='text' value={values}  onChange={e=>setValues( e.target.value )}/>

<input type='text'  value={value}  onChange={e=>setValue(e.target.value)}/>
<button >Add</button>
</form>
</div>
 
  </body>

  )
  
}
export default Update;


