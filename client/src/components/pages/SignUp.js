import React, {useEffect} from 'react';
import '../../App.css';
import Login from '../Login';


function SignUp() {
  useEffect(()=>{
    const getTitle = document.getElementsByTagName("title")[0];
    getTitle.innerHTML = "Sign"
  },[])
  return (
    <div className='signUp'>
      
      <Login/>
    </div>
  )
}

export default SignUp;