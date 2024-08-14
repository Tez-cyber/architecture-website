import React from 'react'
import { legal, navlinks, portfolio } from '../constants'

const Footer = () => {

    return (
        <div className="bg-darkBrown">
            <div className="flex flex-col gap-20 px-8 py-20 lg:w-[1156px] lg:mx-auto lg:flex-row">
                {/* === First flex === */}
                <div className="text-white text-2xl leading-tight lg:text-4xl lg:w-1/4">
                    <p className="">
                        Empowering premium brands through modular spaces
                    </p>
                </div>
                {/* === Second flex === */}
                <div className="flex flex-col gap-20">
                    {/* ==== First section ==== */}
                    <div className="flex flex-col gap-10 lg:flex-row">
                        <div className="pb-5">
                            {navlinks.map(link => (
                                <div key={link.title}>
                                    <a href={link.url} className='text-gray-400 text-sm block pb-2'>
                                        {link.title}
                                    </a>
                                </div>

                            ))}
                        </div>
                        <div className="lg:pl-52">
                            {
                                portfolio.map(item => (
                                    <div key={item.title}>
                                        <a href={item.url} className='text-gray-400 text-sm block pb-2'>
                                            {item.title}
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="lg:pl-14">
                            <p className="text-white">Challenge us with your project</p>
                            <div className="mt-10">
                                <a href="#" className='bg-white px-5 py-3'>Contact Us</a>
                            </div>
                        </div>
                    </div>
                    {/* ==== Second section ==== */}
                    <div className="flex flex-col gap-10 lg:flex-row">
                        <div className="pb-5">
                            <p className="text-white">Legal</p>
                            {legal.map(term => (
                                <div key={term.title}>
                                    <a href={term.url} className='text-gray-400 text-sm block pb-2'>
                                        {term.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="lg:pl-20">
                            {
                                portfolio.map(item => (
                                    <div key={item.title}>
                                        <a href={item.url} className='text-gray-400 text-sm block pb-2'>
                                            {item.title}
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="lg:pl-14">
                            <p className="text-white">Challenge us with your project</p>
                            <div className="mt-10">
                                <a href="#" className='bg-white px-5 py-3'>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer