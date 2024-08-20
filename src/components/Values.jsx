import React from 'react'
import Img1 from '../assets/port-1.jpg'
const Values = () => {
    return (
        <main className='w-full h-screen flex flex-col gap-5 overflow-hidden md:p-8 md:h-screen'>
            <div className="text-center pb-1">
                <p className='text-darkCream text-[15px]'>Key advantages</p>
                <p className="text-3xl leading-[1] md:text-5xl lg:text-[55px]">
                    Choose excellence
                    with <span className="text-darkCream">Go.arch</span>
                </p>
            </div>
            <div className="section text-white bg-darkBrown/85 relative w-full overflow-hidden md:rounded-[3.2rem]">
                <div className="flex flex-col w-full h-full overflow-hidden md:flex-row">
                    {/* ===== First Element */}
                    <div className="section_col">
                        <div className="section_col_media">
                            <img src={Img1} className="section_col_img" alt="" />
                        </div>
                        <div className="section_col_caption">
                            <h6>Push the boundaries of traditional design</h6>
                            <div className="section_col_title">
                                <h2 className="">Elevate</h2>
                                <p className="hidden md:block">Discover More</p>
                            </div>
                            <div className="section_col_number">
                                <h1 className="">1</h1>
                            </div>
                        </div>
                    </div>
                    {/* ===== Second Element */}
                    <div className="section_col">
                        <div className="section_col_media">
                            <img src={Img1} className="section_col_img" alt="" />
                        </div>
                        <div className="section_col_caption">
                            <h6>Trascending the ordinary and introducing innovation</h6>

                            <div className="section_col_title">
                                <h2 className="">Innovate</h2>
                                <p className="hidden md:block">Discover More &rarr;</p>
                            </div>
                            <div className="section_col_number">
                                <h1 className="">2</h1>
                            </div>
                        </div>
                    </div>
                    {/* ===== Third Element */}
                    <div className="section_col">
                        <div className="section_col_media">
                            <img src={Img1} className="section_col_img" alt="" />
                        </div>
                        <div className="section_col_caption">
                            <h6>Challenge conventions and redefine the boundaries</h6>

                            <div className="section_col_title">
                                <h2 className="">Reimagine</h2>
                                <p className="hidden md:block">Discover More &rarr;</p>
                            </div>
                            <div className="section_col_number">
                                <h1 className="">3</h1>
                            </div>
                        </div>
                    </div>
                    {/* ===== Fouth Element */}
                    <div className="section_col">
                        <div className="section_col_media">
                            <img src={Img1} className="section_col_img" alt="" />
                        </div>
                        <div className="section_col_caption">
                            <h6>Engage with spaces designed to fully captivate and envelope</h6>

                            <div className="section_col_title">
                                <h2 className="">Immerse</h2>
                                <p className="hidden md:block">Discover More &rarr;</p>
                            </div>
                            <div className="section_col_number">
                                <h1 className="">4</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Values