import { useEffect, useState } from 'react'
import { FaInstagram, FaFacebookSquare, FaTwitter, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import { navlinks } from '../constants';
import { motion, useAnimationControls } from "framer-motion"

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const containerControls = useAnimationControls()

    useEffect(() => {
        if(openNav) {
            containerControls.start("opened")
        }else {
            containerControls.start("closed")
        }
    }, [openNav])


    // ======= variants for nav bar using framer
    const containerVariants = {
        closed: {
            translateX: "100%",
            transition: {
                type: "spring",
                damping: 15,
                duration: 1.5
            }
        },
        opened: {
            opacity: 1,
            position: "fixed",
            translateX: "0",
            width: "100%",
            transition: {
                type: "spring",
                duration: 2,
                damping: 15
            }
        }
    }
    // === navbutton
    const topElement = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: 40,
            width: "2.5rem",
        }
    }
    const centerElement = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    }
    const bottomElement = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45
        }
    }

    return (
        <div
            className="relative bg-jumbotron before:bg-black bg-cover bg-center h-screen
                      before:absolute before:h-full before:w-full before:opacity-[.75]"
        >
            <div className=' text-white absolute z-[60]'>
                <div className="bg-darkBrown/60 w-fit px-14 py-7 flex flex-col gap-4">
                    <p className="font-semibold text-xl capitalize">arch.Ex</p>
                </div>
                {/* ====== Sidebar ====== */}
                <div className=" absolute bg-opacity-[0.8] w-1/2 h-screen">
                    <div className="h-1/3       "></div>
                    <div className="flex flex-col items-center gap-4">
                        <span className='block bg-white w-[1px] h-16'></span>
                        <a href="" className=""><FaInstagram size={20} /></a>
                        <a href="" className=""><FaFacebookSquare size={20} /></a>
                        <a href="" className=""><FaTwitter size={20} /></a>
                        <a href="" className=""><FaLinkedin size={20} /></a>
                    </div>
                </div>
            </div>
            {/* =========== Navbar ============ */}
            <div className="hidden md:flex">
                <div className=""></div>
                <div className="text-white py-5 flex justify-between mx-auto lg:w-contain">
                    <div className=""></div>
                    <div className="flex gap-5 z-50 font-semibold text-lg">
                        {
                            navlinks.map(link => (
                                <a href={link.url} key={link.title} className='hover:text-darkCream'>
                                    {link.title}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* ============ Navbar Mobile ============ */}
            <div className="md:hidden">
                <div className="flex absolute right-10 my-10">
                    <button
                        onClick={() => setOpenNav(!openNav)}
                        className={openNav ? "fixed flex flex-col gap-2 z-[70] right-10" : "nav_button flex flex-col gap-2 z-[70]"}>
                        <motion.span variants={topElement} animate={openNav ? "opened" : "closed"} className="firstNav w-4 h-1 bg-white rounded origin-left"></motion.span>
                        <motion.span variants={centerElement} animate={openNav ? "opened" : "closed"} className="w-7 h-1 bg-white rounded"></motion.span>
                        <motion.span variants={bottomElement} animate={openNav ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.span>
                    </button>
                </div>
                <motion.div variants={containerVariants} animate={containerControls} initial={closed} className="absolute top-0 right-0 bg-black text-white flex h-screen opacity-0 flex-col items-center justify-center gap-8 text-4xl z-[60]">
                    {navlinks.map(link => (
                        <div key={link.title}>
                            <a href={link.url} onClick={() => setOpenNav(!openNav)}>
                                {link.title}
                            </a>
                        </div>

                    ))}
                </motion.div>
            </div>
            {/* =============== JUMBOTRON ============ */}
            <div className="text-white mx-16 z-50 absolute right-0 top-[40%] md:top-[8%] md:my-44 lg:right-20">
                <div className='flex flex-col gap-5 items-end justify-center md:items-end md:gap-10'>
                    <h1 className='text-3xl w-[18.75rem] text-end font-semibold tracking-wide uppercase md:w-[700px] md:text-4xl md:tracking-widest md:leading-5 md:text-end lg:text-5xl'>
                        Concert hall in new york
                    </h1>
                    <p className='text-base ml-5 w-[18.75rem] text-gray-300 text-end md:w-sContain md:mx-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit quos veritatis quam! Maiores fugit harum vero aliquid?
                        Quae, maiores neque!
                    </p>
                    <div className='bg-lightCream px-5 py-1 rounded-[25px] font-semibold text-lg flex items-center justify-center gap-2 md:px-10 md:py-2'>
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