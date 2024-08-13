import React from 'react'
import visImg from '../assets/port-new.jpg'

const Vision = () => {
    return (
        <div className='bg-darkBrown'>
            <div className="flex gap-10 p-10 flex-col-reverse justify-center items-center md:flex-row lg:py-10 lg:px-5 lg:w-[1056px] lg:mx-auto">
                {/* ==== Image section ==== */}
                <div className="">
                    <img src={visImg} className='rounded-md ' alt="" />
                </div>
                {/* ==== Content section ==== */}
                <div className="text-white flex flex-col gap-5">
                    <h2 className='text-[32px]'>Let us turn your vision into reality</h2>
                    <p className="text-lg">
                        <span className="text-lightCream font-semibold text-xl">Go.arch</span> delivers modular building solutions that blend 
                        efficiency with premium aesthetics, ensuring each project is seamless and impactful. 
                        Our approach allows you to meet tight timelines and high expectations with ease, 
                        while turning your creative vision into reality.
                    </p>
                    <div className="mt-4">
                        <a href="#" className='bg-white text-black px-3 py-4 rounded-md'>Discover Go.arch</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision