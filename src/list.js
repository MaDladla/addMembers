import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom';
import { RiDeleteBin7Line } from 'react-icons/ri';
import {GrEdit } from 'react-icons/gr';
import '../src/compo/style.css';



function Home() {
 
 const data = Object.keys(localStorage);

const handleDelete = (id)=>{  
  localStorage.removeItem(id)   

window.location.reload()
  
} 



return(

<div>

<div className='home'>

<div className='memberdetails'>
<button className='addMbtn'><Link to={'/add'} className='addMbtn1'>Add Member</Link></button>

{localStorage.length !== 0 ? (
        data.map((key,i) => {
          const user = JSON.parse(localStorage.getItem(key));
          return (
            <div key={i}> 
<div className='info'>
<div className='info__details'>
<img src={user.fileUrl} width={70} height={70}/>
<div className='details'>
<h4>{user.name}</h4> 
<p>{user.job}</p>
</div>
</div>
<div className='info__buttons'>
<Link to={`/update/${key}`}><GrEdit className='edit'/></Link>


<RiDeleteBin7Line  onClick={() => handleDelete(key)} className='delete'/>
</div>
</div>
</div>
           
          );
        })

      ) : (
        <div className="members__no-members">
          <h1>No Members is the database</h1>
        </div>
      )}
    
  
</div>



</div>



</div>

 
) 
}
export default Home;
