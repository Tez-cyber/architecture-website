import React from 'react'
import Img1 from '../assets/img-2.jpg'
const Values = () => {
  return (
    <main className='app'>
        <div className="section_container">
            {/* ===== First Element */}
            <div className="section_col">
                <div className="section_col_media">
                    <img src={Img1} alt="" />
                </div>
                <div className="section_col_caption">
                    <span>Push the boundaries of traditional design</span>
                </div>
                <div className="section_col_title">
                    <h2 className="">Elevate</h2>
                    <p className="">Discover More</p>
                </div>
                <div className="section_col_number">
                    <h2 className="">1</h2>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Values