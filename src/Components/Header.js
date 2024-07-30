import React from 'react';
import { auth } from "../utilis/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Header = () => {
  
  
  const [isSignIn, setIsSignIn] = useState();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  
  return (
    <div className='flex justify-end items-center gap-4'>
    
    {<div>
      <button onClick={handleSignOut} type='button' className='btn bg-white text-black p-2' >Sign Out</button>
    </div>}
    </div>
  )
}

export default Header