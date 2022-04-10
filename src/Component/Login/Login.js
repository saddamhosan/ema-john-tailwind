import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const navigation=useNavigate()
    const location=useLocation()
    const from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);

    const handleEmail = (e) => {
      setEmail(e.target.value);
    };

    const handlePassword = (e) => {
      setPassword(e.target.value);
    };

  if(user){
      navigation(from,{replace:true});
  }

    const handleSubmit=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    return (
      <div className=" mt-20 w-[500px] mx-auto border-2 rounded-[8px] flex justify-center py-10 mb-10">
        <div>
          <h1 className="text-[35px] text-[#2A414F]">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-[20px]">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                onBlur={handleEmail}
                className="border w-[415px] h-[55px] rounded-[5px] text-[24px]"
                type="email"
                name="email"
                id=""
              />
            </div>
            <div className="mt-[20px]">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                onBlur={handlePassword}
                className="border w-[415px] h-[55px] rounded-[5px] text-[24px]"
                type="password"
                name="password"
                id=""
              />
            </div>
            {error && <p className="text-red-500">{error.message}</p>}
            {loading && <p>Loading......</p>}
            <input
              className="w-[415px] h-[55px] bg-orange-300 mt-[20px] text-[24px]"
              type="submit"
              value="Login"
            />
          </form>
          <p className="text-center mt-3">
            New to ema-john?
            <Link className="text-orange-500" to="/register">
              Creat an account
            </Link>
          </p>
          <div className="flex justify-center items-center my-5">
            <div>
              <hr />
            </div>
            <p>or</p>
            <div>
              <hr />
            </div>
          </div>
          <button className="w-[415px] border-2 mt-[20px] text-[24px]">
            Sign in with google
          </button>
        </div>
      </div>
    );
};

export default Login;