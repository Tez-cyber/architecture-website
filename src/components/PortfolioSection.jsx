import React from 'react'
import Img1 from "../assets/img-4.jpg"
// import Img2 from "../assets/img-1.jpg"

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
        },
        // {
        //     id: 5,
        //     src: Img1,
        //     title: "residential care",
        //     location: "in london"
        // },
        // {
        //     id: 6,
        //     src: Img1,
        //     title: "residential care",
        //     location: "in london"
        // },
        // {
        //     id: 7,
        //     src: Img1,
        //     title: "residential care",
        //     location: "in london"
        // },
    ]
    return (
        <div className="flex flex-col gap-0 md:flex-row">
            {
                images.map(img => (
                    <div className="relative ">
                        {/* <div className='bg-black absolute h-[700px] w-[700px] opacity-[.7]'></div> */}
                        <img src={img.src} className=' h-[700px] w-[700px] md' alt="" />
                        <div className="bg-black absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-[.5]"></div>
                        <div className="absolute top-0 p-10 flex flex-col text-xl uppercase text-white">
                            <h2 className="">{img.title}</h2>
                            <h2 className="">{img.location}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PortfolioSection