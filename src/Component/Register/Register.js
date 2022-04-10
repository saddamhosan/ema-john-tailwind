import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mistake, setMistake]=useState('')
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    navigate("/");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMistake('')
    if (password !== confirmPassword) {
      setMistake("password not match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className=" mt-20 w-[500px] mx-auto border-2 rounded-[8px] flex justify-center py-10 mb-10">
      <div>
        <h1 className="text-[35px] text-[#2A414F]">Register</h1>
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
              required
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
              required
            />
          </div>
          <div className="mt-[20px]">
            <label className="block" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              onBlur={handleConfirmPassword}
              className="border w-[415px] h-[55px] rounded-[5px] text-[24px]"
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p>{mistake}</p>
          {error && <p className="text-red-500">{error.message}</p>}
          {loading && <p>Loading......</p>}
          <input
            className="w-[415px] h-[55px] bg-orange-300 mt-[20px] text-[24px]"
            type="submit"
            value="Register"
          />
        </form>
        <p className="text-center mt-3">
          Already have an account?
          <Link className="text-orange-500" to="/login">
            Login
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

export default Register;
