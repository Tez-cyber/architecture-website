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
        </div>
    )
}

export default PortfolioSection