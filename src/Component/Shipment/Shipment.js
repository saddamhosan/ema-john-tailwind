import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth)
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
    const handleName = (e) => {
      setName(e.target.value);
    };

    const handleAddress = (e) => {
      setAddress(e.target.value);
    };

    const handleNumber = (e) => {
      setNumber(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        const shipping={name,address,number}
        console.log(shipping);
    }
    return (
      <div className=" mt-20 w-[500px] mx-auto border-2 rounded-[8px] flex justify-center py-10 mb-10">
        <div>
          <h1 className="text-[35px] text-[#2A414F]">Your shipment info</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-[20px]">
              <label className="block" htmlFor="name">
                Name
              </label>
              <input
                onBlur={handleName}
                className="border w-[415px] h-[55px] rounded-[5px] text-[24px]"
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className="mt-[20px]">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                className="border w-[415px] h-[55px] rounded-[5px] text-[24px]"
                type="email"
                name="email"
                value={user?.email}
                readOnly
              />
            </div>
            <div className="mt-[20px]">
              <label className="block" htmlFor="address">
                Address
              </label>
              <input
                onBlur={handleAddress}
                className="border w-[415px] h-[55px] rounded-[5px] text-[24px]"
                type="text"
                name="address"
                id=""
                required
              />
            </div>
            <div className="mt-[20px]">
              <label className="block" htmlFor="number">
                Phone Number
              </label>
              <input
                onBlur={handleNumber}
                className="border w-[415px] h-[55px] rounded-[5px] text-[24px]"
                type="number"
                name="number"
                id=""
                required
              />
            </div>
            <input
              className="w-[415px] h-[55px] bg-orange-300 mt-[20px] text-[24px]"
              type="submit"
              value="Shipment"
            />
          </form>
        </div>
      </div>
    );
};

export default Shipment;