import React from 'react';
import { auth } from "../utilis/firebase";
import { useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import  {useDispatch,useSelector}  from 'react-redux';
import {addUser,removeUser} from "../utilis/userSlice"



const Header = () => {
  
  
  const [isSignIn, setIsSignIn] = useState();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()
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
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({
          uid : uid,
          email : email,
          displayName : displayName
        }))
        navigate("/browser")
        // ...
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
      return () => unsubscribe()
  },[])
  return (
    <div className='flex justify-end items-center gap-4'>
    
    {user && <div>
      <button onClick={handleSignOut} type='button' className='btn bg-white text-black p-2' >Sign Out</button>
    </div>}
    </div>
  )
}

export default Header