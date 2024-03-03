import React from 'react'
import { FaInstagram, FaFacebookSquare, FaTwitter, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {
    const links = [
        { url: "#", title: "Home" },
        { url: "#about", title: "About" },
        { url: "#portfolio", title: "Portfolio" },
        { url: "#contact", title: "Contact" }
    ]

    return (
        <div
            className="relative bg-jumbotron before:bg-black bg-cover bg-center h-screen
                      before:absolute before:h-full before:w-full before:opacity-[.7] "
        >
            <div className=' text-white absolute'>
                <div className="bg-darkBrown bg-opacity-[0.8] w-fit px-14 py-4 flex flex-col gap-4">
                    <p className="font-bold text-xl">go.arch</p>
                    <p className="text-4xl pb-20 text-[#a39280]">01</p>
                </div>
                <div className="bg-darkBrown bg-opacity-[0.8] w-1/2 h-[70vh] ">
                    <div className="h-2/3"></div>
                    <div className="flex flex-col items-center gap-4">
                        <a href="" className=""><FaInstagram size={20} /></a>
                        <a href="" className=""><FaFacebookSquare size={20} /></a>
                        <a href="" className=""><FaTwitter size={20} /></a>
                        <a href="" className=""><FaLinkedin size={20} /></a>
                    </div>
                </div>
            </div>
            {/*---------------------- Navbar */}
            <div className="">
                <div className=""></div>
                <div className="text-white py-5 flex justify-between w-contain mx-auto">
                    <div className=""></div>
                    <div className="flex gap-5 z-50 font-semibold text-lg">
                        {
                            links.map(link => (
                                <a href={link.url} className='hover:text-cream'>
                                    {link.title}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/*------------------- jumbotron */}
            <div className="text-white my-44 z-50 absolute right-40">
                <div className='flex flex-col items-end gap-4'>
                    <h1 className='text-5xl tracking-widest uppercase'>Concert hall in new york</h1>
                    <p className='text-end w-sContain'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odit quos veritatis quam! Maiores fugit harum vero aliquid? 
                        Quae, maiores neque!
                    </p>
                    <div className='bg-[#c0a27e] px-10 py-2 rounded-[25px] font-semibold text-lg flex items-center justify-center gap-2'>
                        <a href=""b className='block'>
                            See project
                        </a>
                        <FaLongArrowAltRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar