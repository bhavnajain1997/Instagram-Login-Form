import React from "react";
import { useState, useRef } from "react";
import { INSTA_LOGO_BLACK, INSTA_LOGO_WHITE } from "../utilis/constant";
import checkValidData from "../utilis/validate";
import { useDispatch } from "react-redux";
import Header from "./Header";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { LIGHT_MODE, DARK_MODE } from "../utilis/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [darkMode , SetDarkMode] = useState(LIGHT_MODE);
  const [currentColor,setCurrentColor] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);

  const handleClickButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    alert("Hello")
    setErrorMessage(message);
    if (message) return;

      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user)
            navigate("/browser")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            navigate("/browser")

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handlescreencolor = () => {
    return(
      // SetDarkMode == true ? 'https://static.thenounproject.com/png/2856481-200.png' : 'https://static.thenounproject.com/png/4808961-200.png'
      darkMode === LIGHT_MODE ? SetDarkMode(DARK_MODE)  : SetDarkMode(LIGHT_MODE),
      setCurrentColor(!currentColor)
    )
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="w-[450px] mx-auto flex justify-center flex-col items-center py-3 mb-32">
      
        <div className={currentColor  ? "bg-black" : "bg-white"}>
        <div className=' flex justify-end p-2'>
      <img onClick={handlescreencolor}  src={darkMode} className='w-7 '/>
    </div>
          <div className="flex justify-center flex-col items-center  py-20 mx-auto">

          
        
          <img src={currentColor ? INSTA_LOGO_WHITE : INSTA_LOGO_BLACK} className="w-56 flex justify-center" />
          <form onSubmit={(e) => e.preventDefault()} className="px-20">
            {/* {isSignInForm && 
            <input ref={email} type='text' placeholder='Phone number, username or email' size={40} className=' border-2 border-black p-2 my-3'/>
            }
            {isSignInForm && 
            <p className='text-red-500'>{errorMessage}</p>
            } */}

            <input
              ref={email}
              type="text"
              placeholder="Phone number, or Email"
              size={40}
              className=" border-2 border-black p-2 my-3"
              required
            />

            <p className="text-red-700">{errorMessage}</p>

            {/* {!isSignInForm && 
            <input ref={name} type='text' placeholder='Full name' size={40} className=' border-2 border-black p-2 my-3'/>
            }
            {!isSignInForm &&
              <p className='text-red-500'>{errorMessage}</p>
            }
            {!isSignInForm && <input type='text' placeholder='Username' size={40} className=' border-2 border-black p-2 my-3'/>}
            {!isSignInForm &&
              <p className='text-red-500'>{errorMessage}</p>
            } */}

            <input
              ref={password}
              type="password"
              placeholder="password"
              size={40}
              className="border-2 border-black p-2 my-3"
            />
            <p className="text-red-700">{errorMessage}</p>
            <button
              className="bg-blue-500 px-6  py-2 text-lg flex justify-center w-full  text-white font-bold mx-auto mt-3 rounded-lg"
              onClick={handleClickButton}
            >
              {isSignInForm ? "Log In" : "Sign Up"}
            </button>
            <p className="text-lg font-bold text-center py-3 "><span className={currentColor ? "text-white" : "text-black"}>OR</span></p>
            <a
              href="https://www.facebook.com/profile.php?id=100007535927759"
              className="flex items-center justify-center cursor-pointer text-blue-900 text-xl gap-2 py-3 font-bold text-center"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-G7c8srz1azzKbwy2UHgTtCBM4C5JJCSgm9lgd-aPdP0eKPNv-kM_bPf-ie8Ya94-ho&usqp=CAU"
                className="w-10"
              />
              Log In with Facebook
            </a>
            <button className="flex justify-center w-full text-blue-600">
              Forget Password?
            </button>
            <button
              className=" text-center flex justify-center w-full border-2 border-black p-3 my-10 bg-white"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "Don't have an account ? Sign Up"
                : "Have an account? Log In"}
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
