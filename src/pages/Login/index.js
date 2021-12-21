import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

// OWNS
import logo from "../../assets/logo.png";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-primary-400 to-secondary-400 flex justify-center items-center relative">
      <div className="w-full max-w-lg md:max-w-md p-4 bg-white rounded-lg mx-2">
        <div className="flex flex-col items-center my-4 gap-2">
          {/* <h1 className="text-4xl md:text-3xl  uppercase bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold text-transparent bg-clip-text tracking-tighter">
            Mangkokku
          </h1> */}
          <img src={logo} alt="Logo Mangkokku" className="h-20" />
        </div>
        <form
          className="flex flex-col mx-auto max-w-xs"
          onSubmit={handleSubmit}
        >
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="rounded-full text-sm"
            margin="mb-2"
            label="Email"
            placeholder="Masukan Email Anda"
          />
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-xs font-medium">Password</label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isVisible ? "text" : "password"}
                placeholder="Masukan Password Anda"
                className={`border border-gray-300 transition-all ring-0 focus:border-primary-500 focus:ring-4 focus:ring-primary-200 w-full pr-10 rounded-full text-sm`}
              />
              <button
                className="absolute right-0 top-[50%] translate-y-[-50%] text-xl text-gray-400 p-2 ml-2 rounded-full transition-all duration-300 hover:text-gray-500"
                onClick={setIsVisible.bind(this, !isVisible)}
              >
                {isVisible ? <HiOutlineEyeOff /> : <HiOutlineEye />}
              </button>
            </div>
          </div>
          <div>
            <Link to="/admin/dashboard">
              <Button
                color="primary"
                className="w-full justify-center rounded-full mb-8"
              >
                Login
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
