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
            <div className="text-center">
                <p className='text-darkCream text-[15px]'>Key advantages</p>
                <p className="text-3xl leading-[1] md:text-5xl lg:text-[55px]">
                    Choose excellence
                    with <span className="text-darkCream">arch.Ex</span>
                </p>
            </div>
            {/* ===== Second section ===== */}
            <div className="flex h-full w-full items-center justify-center">
                <div className='w-[1200px] max-w-full'>
                    <ul ref={wrapperRef} className="group flex h-[500px] gap-[1.5%]">
                        {
                            valueContents.map((value, i) => (
                                <li
                                    onClick={() => setActiveItem(i)}
                                    aria-current={activeItem === i}
                                    className={classNames(
                                        "relative w-[8%] first:w-[1%] last:w-[1%] [&[aria-current='true']]:w-[48%] hover:w-[12%] ",
                                        "[transition:width_var(--transition),200ms_ease-in] ",
                                        "before:absolute before:bg-white before:top-0 before:bottom-0 before:left-[-10px] before:right-[-10px]",
                                        "[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%]",
                                        "first:pointer-events-none last:pointer-events-none [&_img]:first:opacity-0 [&_img]:last:opacity-0"
                                    )}
                                    key={value.id}
                                >
                                    <div className="relative bg-[#c9c6c7] overflow-hidden w-full h-full rounded-2xl">
                                        <img
                                            className={classNames(
                                                'absolute h-[640px] w-[590px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover',
                                                activeItem === i ? "grayscale-0" : "grayscale"
                                            )}
                                            src={value.img}
                                            alt={value.name}
                                        />
                                        {/* =============== */}
                                        <div className={classNames(
                                            "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0",
                                            activeItem === i ? "md:opacity-25" : "md:opacity-0"
                                        )}></div>
                                        {/* ============== */}
                                        <div className={classNames(
                                            "absolute w-[590px] left-8 top-8 text-gray-50 transition-[transform,opacity]", 
                                            activeItem === i ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                                        )}>
                                            <p className="text-lg uppercase ">{value.title}</p>
                                            <p className="text-4xl font-bold">{value.name}</p>
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