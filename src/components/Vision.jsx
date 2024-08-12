import React from 'react'
import visImg from '../assets/port-new.jpg'

const Vision = () => {
  return (
    <div className=''>
        {/* ==== Image section ==== */}
        <div className="">
            <img src={visImg} alt="" />
        </div>
        {/* ==== Content section ==== */}
        <div className="">
            <h2>Let us turn your vision into reality</h2>
            <p className="">
                <span className=""></span> delivers modular building solutions that blend efficiency with premium aesthetics, ensuring each project is seamless and impactful. Our approach allows you to meet tight timelines and high expectations with ease, while turning your creative vision into reality.
            </p>
        </div>
    </div>
  )
}

export default Vision