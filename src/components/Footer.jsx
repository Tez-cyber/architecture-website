import React from 'react'
import { navlinks } from '../constants'

const Footer = () => {

    return (
        <div className="bg-darkBrown">
            <div className="">
                <p className="">
                    Empowering premium brands through modular spaces
                </p>
            </div>
            <div className="">
                <div className="">
                    <div className="">
                        {navlinks.map(link => (
                            <div key={link.title}>
                                <a href={link.url}>
                                    {link.title}
                                </a>
                            </div>

                        ))}
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default Footer