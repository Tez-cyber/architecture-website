import React from 'react'
import { legal, navlinks, portfolio } from '../constants'

const Footer = () => {

    return (
        <div className="bg-darkBrown overflow-hidden">
            <div className="flex flex-col gap-20 px-8 pt-20 lg:w-[1156px] lg:mx-auto lg:flex-row">
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
                                    <a href={link.url} className='footer-links'>
                                        {link.title}
                                    </a>
                                </div>

                            ))}
                        </div>
                        <div className="lg:pl-52">
                            {
                                portfolio.map(item => (
                                    <div key={item.title}>
                                        <a href={item.url} className='footer-links'>
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
                            <p className="text-white pb-3">Legal</p>
                            {legal.map(term => (
                                <div key={term.title}>
                                    <a href={term.url} className='footer-links'>
                                        {term.title}
                                    </a>
                                </div>
                            ))}
                            <a href="#" className='footer-links'>
                                Cookies Preferences
                            </a>
                        </div>
                        {/* === Contact === */}
                        <div className="lg:pl-20">
                            <p className="text-white pb-3">Contact</p>
                            <div className="">
                                <div className="flex text-sm text-gray-400">
                                    <span className="mr-2">
                                        Mail: 
                                    </span>
                                    <a href="mailto:info@goarch.com" className='footer-links'>info@goarch.com</a>
                                </div>
                                <div className="flex text-sm text-gray-400">
                                    <span className="mr-2">
                                        Tel: 
                                    </span>
                                    <a href="tel:+2347059269642" className='footer-links'>+234-705-926-9642</a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:pl-1">
                            <p className="text-white pb-3">Address</p>
                            <div className="flex flex-col text-sm text-gray-400">
                                <span>Avenue Robert Schuman</span>
                                <span>112B-1400 Nivelles</span>
                                <span>Belgium</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===== Third Section ===== */}
            <div className="">
                <h1 className="text-center py-10 text-8xl uppercase  text-white md:text-[156px] lg:text-[256px] md:py-10">arch.Ex</h1>
            </div>
        </div>
    )
}

export default Footer