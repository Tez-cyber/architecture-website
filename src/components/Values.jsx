import React, { useEffect, useState, useRef } from 'react'
import Img1 from '../assets/port-1.jpg'
import { valueContents } from './valuesContent'
import classNames from "classnames"

const Values = () => {
    const [activeItem, setActiveItem] = useState(2)
    const wrapperRef = useRef(null)
    const timeoutRef = useRef(null)

    useEffect(() => {
        if (!wrapperRef.current) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        wrapperRef.current.style.setProperty(
            "--transition",
            "600ms cubic-bezier(.22, .61, .36, 1)"
        )

        //   timeoutRef.current = setTimeout(() => {
        //     wrapperRef.current?.style.removeProperty("--transition")
        //   }, 900)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [activeItem])

    return (
        <main className=' mb-10'>
            {/* ===== Values title ===== */}
            <div className="text-center mb-10">
                <p className='text-darkCream text-[15px]'>Key advantages</p>
                <p className="text-3xl leading-[1] md:text-5xl lg:text-[55px]">
                    Choose excellence
                    with <span className="text-darkCream">arch.Ex</span>
                </p>
            </div>
            {/* ===== Second section ===== */}
            <div className="flex h-full w-full mx-auto items-center justify-center">
                <div className='w-[1200px] max-w-full px-4 md:px-0'>
                    <ul ref={wrapperRef} className="group flex flex-col gap-3 md:gap-[1.5%] md:h-[500px] md:flex-row">
                        {
                            valueContents.map((value, i) => (
                                <li
                                    onClick={() => setActiveItem(i)}
                                    aria-current={activeItem === i}
                                    className={classNames(
                                        "relative first:opacity-0 last:opacity-0 md:w-[15%] md:first:w-[1%] md:last:w-[1%] md:[&[aria-current='true']]:w-[48%] md:hover:w-[12%] ",
                                        "md:[transition:width_var(--transition),200ms_ease-in] ",
                                        "before:hidden before:absolute before:bg-white before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px] md:before:block",
                                        "md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%]",
                                        "first:pointer-events-none last:pointer-events-none [&_img]:first:opacity-0 [&_img]:last:opacity-0"
                                    )}
                                    key={value.id}
                                >
                                    <div className="relative bg-[#c9c6c7] overflow-hidden w-full h-full rounded-2xl">
                                        <img
                                            className={classNames(
                                                'absolute right-0  w-24 h-auto object-cover md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:h-[640px] md:w-[590px]',
                                                activeItem === i ? "grayscale md:blur-md" : "grayscale-0"
                                            )}
                                            src={"/public/images" + value.img}
                                            alt={value.name}
                                        />
                                        {/* =============== */}
                                        <div className={classNames(
                                            "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0",
                                            activeItem === i ? "md:opacity-25" : "md:opacity-0"
                                        )}></div>
                                        {/* ============== text section */}
                                        <div className={classNames(
                                            "w-2/3 left-8 top-8 p-4 text-gray-50 transition-[transform,opacity] md:p-0 md:absolute", 
                                            activeItem === i ? "md:translate-x-0 md:opacity-100" : "md:translate-x-4 md:opacity-0"
                                        )}>
                                            <p className="uppercase text-sm md:text-lg">{value.title}</p>
                                            <p className="text-2xl font-bold md:text-7xl md:mt-[20%]">{value.name}</p>
                                            <p className='hidden mt-20 md:block md:text-9xl'>{value.id}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </main>
    )
}

export default Values