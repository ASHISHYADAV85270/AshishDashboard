import React from 'react'
// import { FcGoogle, IoLogoFacebook } from "react-icons/io";
import { RiAppleFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
const SignupForm = () => {
    const styles = {
        background: "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)",
    };
    return (
        <div id="main-div" className="w-[386px] flex flex-col ">
            <h1 className="text-4xl font-bold font-montserrat ">Sign In</h1>
            <p className="font-medium py-3 font-lato text-[16px] leading-5">Sign in to your account</p>
            <div id="login-buttons" className="flex space-x-3 my-5 mx-0">
                <button
                    className="w-[197.6px] text-[#858585] text-[12px]   px-2 py-2 font-bold   rounded-[10px] cursor-pointer  flex row space-x-2 items-center focus:border-none bg-white hover:scale-110 transition duration-700 "
                >
                    <FcGoogle size={24} />  <span className='font-montserrat text-[12px] font-light'>Sign in with Google</span>
                </button>
                <button
                    className="w-[197.6px] text-[#858585] text-[12px] font-Montserrat    px-2 py-2 font-bold   rounded-[10px] cursor-pointer  flex row space-x-2 items-center bg-white hover:scale-110 transition duration-700"
                >
                    <RiAppleFill size={24} />   <span className="mt-1 font-montserrat text-[12px] font-light">Sign in with Apple</span>
                </button>
            </div>
            <div
                className="bg-white flex flex-col py-6 px-8 rounded-2xl font-Lato"
            >
                <label className='text-[16px]'>Email address</label>
                <input
                    type="email"
                    id="input"
                    className="bg-[#f5f5f5] border-none p-3 rounded-[10px]  mx-0 text-base font-normal h-[43.91px]"
                    placeholder='Enter Email'
                />

                <br />

                <label className='text-[16px]'>Password</label>
                <input
                    type="password"
                    id="input"
                    className="bg-[#f5f5f5] border-none p-3 rounded-[10px]  mx-0 text-base font-normal h-[43.91px]"
                    placeholder='Enter Password'
                />

                <p className="text-[#346bd4] my-5 mx-0 cursor-pointer font-lato leading-5">
                    Forgot Password?
                </p>

                <button
                    onClick={() => alert("  ")}
                    className="font-Montserrat text-white rounded-[10px] h-[43px] text-base font-bold border-none cursor-pointer hover:scale-110 transition duration-700"
                    style={styles}
                >
                    Sign In
                </button>
            </div>
            <p className="text-[#858585] text-center mt-5">
                Don&apos;t have an account?
                <span className="text-[#346bd4] my-5 mx-0 cursor-pointer">
                    Register here
                </span>
            </p>
        </div>
    )
}

export default SignupForm
