import React from 'react'
import { GiFamilyHouse } from "react-icons/gi"
import Img from "../assets/img-3.jpg"

const AboutSection = () => {
    return (
        <div className='bg-darkBrown text-white pb-20'>
            <div className="py-20 flex items-center justify-center gap-2 text-3xl uppercase tracking-widest">
                <h2 className="">about</h2>
                <h2 className="text-lightCream">go.arch</h2>
            </div>
            <div className="flex flex-col gap-10 mx-10 md:flex-row md:gap-6 md:items-start lg:w-[1024px] lg:mx-auto lg:gap-14 ">
                {/* -----------------first section */}
                <div className="flex flex-col gap-6">
                    <h2 className="font-bold text-3xl ">we turn ideas into works of art <span className='inline-block w-[7px] h-[7px] bg-lightCream rounded-3xl'></span></h2>
                    <p className="">
                        For each project we establish relationships with 
                        partners who we know will help us create added value 
                        for your project. As well as bringing together the public
                         and private sectors, we make sector-overarching links to 
                         gather knowledge and to learn from each other. The way we 
                         undertake projects is based on permanently applying values that 
                         reinforce each other: socio-cultural value, experiental value, 
                         building-technical value and economical value.
                    </p>
                </div>
                {/* -----------------second section */}
                <div className="flex flex-col">
                    <div className="py-10 flex flex-col text-2xl font-semibold md:py-0 md:pb-10">
                        <h2 className="">our</h2>
                        <h2 className="">specialization:</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex flex-col items-center justify-center gap-1">
                            <GiFamilyHouse size={40} className='text-darkCream' />
                            <p className="uppercase tracking-wider">architecture</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1">
                            <GiFamilyHouse size={40} className='text-darkCream' />
                            <p className="uppercase tracking-wider">interior</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1">
                            <GiFamilyHouse size={40} className='text-darkCream' />
                            <p className="uppercase tracking-wider">planning</p>
                        </div>
                    </div>
                </div>
                {/* -----------------Third section */}
                <div className="flex items-center justify-center">
                    <img src={Img} className=' rounded-xl md:w-3/5 md:h-3/5' alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection