import React from 'react'
import Img1 from "../assets/port-1.jpg"
import Img2 from "../assets/port-2.jpg"
import Img3 from "../assets/port-4.jpg"

const PortfolioSection = () => {
    const images = [
        {
            id: 1,
            src: Img1,
            title: "residential care",
            location: "in paris"
        },
        {
            id: 2,
            src: Img1,
            title: "residential care",
            location: "in berlin"
        },
        {
            id: 3,
            src: Img1,
            title: "concert hall",
            location: "in new york"
        },
        {
            id: 4,
            src: Img1,
            title: "modern hall",
            location: "in london"
        }
    ]
    return (
        <div className="">
            {/* ======== Heading ========= */}
            <div className="py-20 flex items-center justify-center gap-2 text-3xl uppercase tracking-widest">
                <h2>Hold up. Check out our amazing</h2>
                <h2 className='text-darkCream'>projects.</h2>
            </div>
            {/* ========= Content ========= */}
            <div className="parent w-3/4 mx-auto">
                <div className=" flex flex-col gap-2">
                    {/* <div className="">
                        <div className="">
                            <img src={Img1} className='w-1/2' alt="" />
                        </div>
                        <div className="">
                            <img src={Img1} className='w-1/2' alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-2">
                            <div className="">
                                <img src={Img1} className='w-full' alt="" />
                            </div>
                            <div className="">
                                <div className="">
                                    <img src={Img1} className='' alt="" />
                                </div>
                                <div className="">
                                    <img src={Img1} className='' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="">
                                <img src={Img1} className='' alt="" />
                            </div>
                            <div className="">
                                <img src={Img1} className='' alt="" />
                            </div>
                        </div>
                    </div> */}
                    <div className="grid grid-cols-3 gap-2">
                        <div className="">
                            <img src={Img1} className='rounded-xl' alt="" />
                        </div>
                        <div className="">
                            <img src={Img1} className='rounded-xl' alt="" />
                        </div>
                        {/* =========== */}
                        <div className="flex flex-col gap-2">
                            <div className="">
                                <img src={Img2} className='rounded-xl ' alt="" />
                            </div>
                            <div className="">
                                <img src={Img2} className='rounded-xl ' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="">
                            <img src={Img1} className='rounded-xl' alt="" />
                        </div>
                        <div className="">
                            <img src={Img1} className='rounded-xl' alt="" />
                        </div>
                        <div className="">
                            <img src={Img1} className='rounded-xl' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection