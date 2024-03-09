import React from 'react'
import LandingPG from '../assets/images/Digital circle.jpg'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="h-[90vh] overflow-hidden">
                <img src={LandingPG} alt="landing page" className='object-cover w-full h-full' />
                <h1 className="text-6xl text-white font-bold rounded-lg absolute top-1/2 left-0 self-center z-10 px-4 py-2 sm:left-1/2">
                    Elevate Your Business
                    <p className='text-lg ml-9'>
                        We Provide solutions to help your business thrive.
                    </p>
                </h1>
            </div>
        </div>
    )
}

export default Navbar