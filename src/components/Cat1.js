import React from 'react'
import Footer from './Footer'
import Navbar from "./Navbar";
import Cada from "../assets/images/cardano.jpg";

function Cat1() {
    return (
        <div className="Cat1">
            <Navbar />
            <p className="mt-20 text-lg mx-12">
                Our Listed Products are 100% Original and comes with 2 Month Warranty Period, with VAT included.
            </p>

            <h1 className="text-3xl text-center my-10">Product Category</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-12 mb-8">

                <div className='relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer'>
                    <img src={Cada} alt="Pilau" className='w-full' />
                    <div className='ml-2'>
                        <span className='font-bold'>HP Elite Book</span>
                        <span className='block'>Recipe by Mario</span>
                    </div>
                    <div className="absolute text-sm font-bold uppercase rounded-full p-2 top-0 bg-slate-600 ml-2 mt-2">25</div>
                </div>


                <div className="bg-red-500">
                    <h1>love</h1>
                </div>
                <div className="bg-red-500">
                    <h1>love</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cat1