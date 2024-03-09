import React from 'react'
import Masked from '../assets/images/2248500.jpg'
import Network from "../assets/images/network.jpg"
import Printers from "../assets/images/printers.jpg"
import Desktops from "../assets/images/desktops.jpg"

function Body() {
    return (
        <div className="Body">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-0">
                <section className="px-12 mx-12 my-10">
                    <img src={Masked} alt="MaskedImage" className="rounded-l-full rounded-tr-full" />
                </section>

                <div className="text-xl self-center mx-12 sm:mt-12">
                    <h1 className="font-serif">
                        "Workspace Computers is a leading provider of wholesale and retail ICT devices and equipment, catering to the diverse needs of businesses and individuals in Dar es Salaam, Tanzania, and beyond.
                        We offer a comprehensive range of products and services, ensuring you have access to the latest technology at competitive prices."
                    </h1>
                </div>
            </div>


            <div className="categories">
                <h1 className="text-center text-4xl font-bold my-7">Categories</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-8 mb-8">
                    <div className="relative">
                        <img src={Desktops} alt="MacBook Desktop" className="h-72" />
                        <p className="absolute inset-x-0 bottom-0 text-center m-8 text-white text-lg">Laptops & Desktops</p>
                    </div>
                    <div className="relative">
                        <img src={Network} alt="Networking Switch" className="h-72" />
                        <p className="absolute inset-x-0 bottom-0 text-center m-8 text-white text-lg">Networking & Communications</p>
                    </div>
                    <div className="relative">
                        <img src={Printers} alt="PrintersImage" className="h-72" />
                        <p className="absolute inset-x-0 bottom-0 text-center m-8 text-white text-lg">Printers, Scanners & Photocopies</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body