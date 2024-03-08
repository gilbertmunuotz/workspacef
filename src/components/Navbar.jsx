import React from 'react'
import LandingPG from '../assets/images/Digital circle.jpg'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="h-[90vh] overflow-hidden">
                <img src={LandingPG} alt="landing page" className='object-cover w-full h-full' />
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center p-4">
                    <h1 className="text-5xl text-white font-serif mr-6">Elevate Your Business</h1>
                    <h2 className="text-3xl text-white font-serif">We Provide solutions to help your business thrive.</h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar