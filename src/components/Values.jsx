import React from 'react'
import Img1 from '../assets/port-1.jpg'
import { valueContents } from './valuesContent'
const Values = () => {
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
                    <ul className="flex h-[500px] gap-2">
                        {
                            valueContents.map((value) => (
                                <li className='w-[8%] rounded-2xl bg-[#c9c6c7]' key={value.id}>{value.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </main>
    )
}

export default Values