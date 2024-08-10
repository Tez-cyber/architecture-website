import { useState } from 'react'
import { FaInstagram, FaFacebookSquare, FaTwitter, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const links = [
        { url: "#", title: "Home" },
        { url: "#about", title: "About" },
        { url: "#portfolio", title: "Portfolio" },
        { url: "#contact", title: "Contact" }
    ]

    return (
        <div
            className="relative bg-jumbotron before:bg-black bg-cover bg-center h-screen
                      before:absolute before:h-full before:w-full before:opacity-[.75] "
        >
            <div className=' text-white absolute z-[60]'>
                <div className="bg-darkBrown bg-opacity-[0.8] w-fit px-14 py-4 flex flex-col gap-4">
                    <p className="font-bold text-xl">go.arch</p>
                    <p className="text-4xl pb-20 text-[#a39280]">01</p>
                </div>
                {/* ====== Sidebar ====== */}
                <div className="bg-darkBrown absolute bg-opacity-[0.8] w-1/2 h-screen">
                    <div className="h-1/2"></div>
                    <div className="flex flex-col items-center gap-4">
                        <a href="" className=""><FaInstagram size={20} /></a>
                        <a href="" className=""><FaFacebookSquare size={20} /></a>
                        <a href="" className=""><FaTwitter size={20} /></a>
                        <a href="" className=""><FaLinkedin size={20} /></a>
                    </div>
                </div>
            </div>
            {/*---------------------- Navbar */}
            <div className="hidden md:flex">
                <div className=""></div>
                <div className="text-white py-5 flex justify-between mx-auto lg:w-contain">
                    <div className=""></div>
                    <div className="flex gap-5 z-50 font-semibold text-lg">
                        {
                            links.map(link => (
                                <a href={link.url} key={link.title} className='hover:text-darkCream'>
                                    {link.title}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Navbar Mobile */}
            <div className="md:hidden">
                <div className="flex absolute right-10 my-10">
                    <div className=""></div>
                    <button 
                        onClick={() => setOpenNav(!openNav)}
                        className="flex flex-col gap-2 z-[70]">
                        <span className="firstNav w-4 h-1 bg-white rounded"></span>
                        <span className="w-7 h-1 bg-white rounded"></span>
                        <span className="w-10 h-1 bg-white rounded"></span>
                    </button>
                </div>
                {
                    openNav &&
                    <div className="absolute top-0 left-0 bg-black text-white flex h-screen w-screen flex-col items-center justify-center gap-8 text-4xl z-[60]">
                        {links.map(link => (
                            <div key={link.title}>
                                <a href={link.url} onClick={() => setOpenNav(!openNav)}>
                                    {link.title}
                                </a>
                            </div>

                        ))}
                    </div>
                }
            </div>
            {/*------------------- jumbotron */}
            <div className="text-white mx-5 my-60 z-50 absolute top-[25%] right-0 md:right-40 md:my-44">
                <div className='flex flex-col gap-4 items-center justify-center md:items-end '>
                    <h1 className='text-3xl text-center font-semibold tracking-wide uppercase md:text-4xl lg:text-5xl md:tracking-widest'>Concert hall in new york</h1>
                    <p className='text-center text-lg mx-5 md:text-end md:w-sContain md:mx-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit quos veritatis quam! Maiores fugit harum vero aliquid?
                        Quae, maiores neque!
                    </p>
                    <div className='bg-lightCream px-10 py-2 rounded-[25px] font-semibold text-lg flex items-center justify-center gap-2'>
                        <a href="" b className='block'>
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