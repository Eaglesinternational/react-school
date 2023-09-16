import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Form() {

  let history = useNavigate();
    
  const [data, setData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
  })

  const handleChange=(e)=>{
      setData({...data, [e.target.name]: e.target.value});
     // console.log(data);
  }

  const submitForm=(e)=>{
      e.preventDefault();
    const  sendData = {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: data.password
      }

      console.log(sendData);

      axios.post('http://localhost/react-latin/index.php', sendData).then((result)=>{
          if(result.data.status === 'Invalid'){
              alert ('invalid user');
          }
          else {
              history('/');
          }
      })
  }
return (
  <div className="container">
      <form onSubmit={submitForm} className='forms'>
          <div>
              <label htmlFor="">First Name</label>
              <input type="text" name='first_name'  className='form-control' onChange={handleChange} value={data.first_name}/>
          </div>
          <div>
              <label htmlFor="">Last Name</label>
              <input type="text" name='last_name' className='form-control' onChange={handleChange} value={data.last_name}/>
          </div>
          <div>
              <label htmlFor="">Email</label>
              <input type="text" name='email' className='form-control' onChange={handleChange} value={data.email}/>
          </div>
          <div>
              <label htmlFor="">Password</label>
              <input type="password" name='password' className='form-control' onChange={handleChange} value={data.password}/>
          </div>
        <center>  <div>
              <button className="btn btn-primary mt-3" name='submit'>Register</button>
          </div> </center>
      </form>
  </div>
)
}
