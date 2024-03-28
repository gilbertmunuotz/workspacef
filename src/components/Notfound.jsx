import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import NoImage from '../assets/images/3793096.jpg';

function Notfound() {
    return (
        <div className='Notfound'>
            <Navbar />
            <div className="h-[100vh] overflow-hidden">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="">
                        <img src={NoImage} alt="Notfound page" className='object-contain w-full h-full' />
                    </div>
                    <div className="grid place-items-center text-black text-2xl">
                        <h1>Ooops...Soory <br /> Page Doesn't Exist.</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Notfound;
