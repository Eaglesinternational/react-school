import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    let history  = useNavigate();

    const [user, setUser] = useState({
         email: "",
         password: ""
    })

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
       // console.log(user)
    }

    
    const submitForm=(e)=>{
        e.preventDefault();
      const  sendData = {
            email: user.email,
            password: user.password
            
        }

        console.log(sendData);

        axios.post('http://localhost/react-latin/login.php', sendData).then((result)=>{
            if(result.data.status === '200'){

                window.localStorage.setItem('email', result.data.Email);
                window.localStorage.setItem('userName', (result.data.first_name+ ' ' +result.data.first_name ));


                history('/');
            }
            else {
               
                alert ('invalid user');
            }
        })
    }


  return (
    <div>
    <div>
        <h1 className="text-center">Login Page</h1>
    </div>
    <form onSubmit={submitForm}>
    <div>
        <label htmlFor="">Email</label>
        <input type="text" name='email' className='form-control'  onChange={handleChange} value={user.email}/>
    </div>
    <div>
        <label htmlFor="">Password</label>
        <input type="password" name='password' className='form-control' onChange={handleChange} value={user.password}/>
    </div>
    <div>
        <button className="btn btn-success mt-3" name='login'>Login</button>
    </div>
    </form>
    </div>
  )
}

export default Login