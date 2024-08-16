import React from 'react'
import Img1 from '../assets/port-1.jpg'
const Values = () => {  
    return (
        <main className='p-8 w-full h-screen overflow-hidden'>
            <div className="section relative w-full rounded-[3.2rem] border border-gray-300  overflow-hidden">
                <div className="section_container flex w-full h-[inherit]">
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
                    {/* ===== Second Element */}
                    <div className="section_col">
                        <div className="section_col_media">
                            <img src={Img1} alt="" />
                        </div>
                        <div className="section_col_caption">
                            <span>Trascending the ordinary and introducing innovation</span>
                        </div>
                        <div className="section_col_title">
                            <h2 className="">Innovate</h2>
                            <p className="hidden md:block">Discover More &rarr;</p>
                        </div>
                        <div className="section_col_number">
                            <h2 className="">1</h2>
                        </div>
                    </div>
                    {/* ===== Third Element */}
                    <div className="section_col">
                        <div className="section_col_media">
                            <img src={Img1} alt="" />
                        </div>
                        <div className="section_col_caption">
                            <span>Challenge conventions and redefine the boundaries</span>
                        </div>
                        <div className="section_col_title">
                            <h2 className="">Reimagine</h2>
                            <p className="hidden md:block">Discover More &rarr;</p>
                        </div>
                        <div className="section_col_number">
                            <h2 className="">3</h2>
                        </div>
                    </div>
                    {/* ===== Fouth Element */}
                    <div className="section_col">
                        <div className="section_col_media">
                            <img src={Img1} alt="" />
                        </div>
                        <div className="section_col_caption">
                            <span>Engage with spaces designed to fully captivate and envelop</span>
                        </div>
                        <div className="section_col_title">
                            <h2 className="">Immerse</h2>
                            <p className="hidden md:block">Discover More &rarr;</p>
                        </div>
                        <div className="section_col_number">
                            <h2 className="">4</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Values