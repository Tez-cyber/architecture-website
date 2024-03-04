import React from 'react'
import { GiFamilyHouse } from "react-icons/gi"
import Img from "../assets/img-3.jpg"

const AboutSection = () => {
    return (
        <div className='bg-darkBrown text-white'>
            <div className="py-20 flex items-center justify-center gap-2 text-3xl uppercase tracking-widest">
                <h2 className="">about</h2>
                <h2 className="text-lightCream">go.arch</h2>
            </div>
            <div className="flex flex-col gap-10 mx-10 md:flex-row md:gap-6 md:items-start lg:w-[1024px] lg:mx-auto lg:gap-14 ">
                {/* -----------------first section */}
                <div className="flex flex-col gap-6 text-justify ">
                    <h2 className="font-semibold text-2xl ">we turn ideas into works of art</h2>
                    <p className="">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Optio dolorem itaque quibusdam consequuntur quo natus nostrum
                        officiis, hic deleniti commodi, architecto aliquam adipisci neque
                        reprehenderit ducimus quod pariatur fugit incidunt vero. Sint a quaerat
                        dolor illo libero esse odit ex delectus similique. Labore ex libero incidunt
                        iure. Hic eveniet, provident, temporibus, nam illo dignissimos eos dolorem
                        harum itaque fuga ad quisquam impedit sequi perferendis quaerat error ullam
                        vel beatae veritatis.
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
                    <img src={Img} className='md:w-3/5 md:h-3/5' alt="" />
                </div>
            </div>
            <div className="py-20 flex items-center justify-center gap-2 text-3xl uppercase tracking-widest">
                <h2 className="">our</h2>
                <h2 className="text-lightCream">projects</h2>
            </div>
        </div>
    )
}

export default AboutSection