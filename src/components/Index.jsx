import React from 'react'
import Body from "./Body";
import Home from "./Home";
import Form from "./Form";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Index() {
    return (
        <div className="Index">
            <Navbar />
            <Home />
            <Body />
            <Form />
            <Footer />
        </div>
    )
}

export default Index