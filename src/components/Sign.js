import React from 'react';
import SignupForm from './SignupForm';

const Sign = () => {

    const triangleClipPath = "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)";
    const backgroundStyle = {
        clipPath: triangleClipPath,
        WebkitClipPath: triangleClipPath,
        background: "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)",
    };

    return (
        <div className="flex w-screen h-screen bg-[#F8FAFF]" id="container">
            <div
                className="flex  flex-col justify-center items-center w-[719.99px]  text-white font-bold text-4xl lg:text-[72px]"
                style={backgroundStyle}
            >
                <span className="text-white text-[24px] absolute top-[59.81px] left-[73px] font-poppin  ">
                    LOGO
                </span>
                <h1 className='left-[171px]   font-montserrat'>Board.</h1>



            </div>
            <div
                className="flex-[1.5] flex justify-center items-center w-[calc(100%-719.99px)]"
                id="right"
            >
                <SignupForm />
            </div>
        </div>
    )
}

export default Sign
