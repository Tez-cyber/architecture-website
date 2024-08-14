import React from 'react'

const Contact = () => {
    return (
        <div className="bg-gray-100">
            <div className="flex flex-col gap-24 px-8 py-10 lg:w-[1156px] lg:mx-auto lg:flex-row">
                {/* ==== First Section ==== */}
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <p className='text-darkCream text-[15px]'>Contact</p>
                    <p className="text-2xl lg:text-[55px] leading-[1]">
                        Challenge us with
                        your project
                    </p>
                    <p className="pt-6 text-xl">
                        See how leading organizations have trusted us
                        to meet their challenging designs and logistical
                        requirements with precision.
                    </p>
                </div>
                {/* ==== Second Section ==== */}
                <div className="w-full">
                    <form action="">
                        {/* ========== First and Lastname */}
                        <div className="w-full flex flex-col gap-5 pb-2 md:flex-row">
                            <div className="w-full">
                                <p className="pb-3 text-xl">First name <span className="text-xl text-darkBrown">*</span></p>
                                <input type="text" className="w-full p-4 outline-darkCream" placeholder='First name' />
                            </div>
                            <div className="w-full">
                                <p className="pb-3 text-xl">Last name <span className="text-xl text-darkBrown">*</span></p>
                                <input type="text" className="w-full p-4 outline-darkCream" placeholder='Last name' />
                            </div>
                        </div>
                        {/* ========= Email */}
                        <div className="w-full pb-2">
                            <p className="pb-3 text-xl">Email <span className="text-xl text-darkBrown">*</span></p>
                            <input type="email" className="w-full p-4 outline-darkCream" placeholder='Email' />
                        </div>
                        {/* ========= Message */}
                        <div className="w-full">
                            <p className="pb-3 text-xl">Message <span className="text-xl text-darkBrown">*</span></p>
                            <textarea type="email" className="w-full h-28 p-4 outline-darkCream" placeholder='Email' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact