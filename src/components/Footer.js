import React from 'react'
import { FaInstagram } from "react-icons/fa6"

function Footer() {
    return (
        <div className="Footer">
            <div className="bg-black text-white p-16">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <section>
                        <FaInstagram size={30} className="ml-28" />
                        <h1>Workspace Computers Limited</h1>
                    </section>

                    <section className="self-center">
                        <h2> P. O. Box 34555</h2>
                        <h3>+255 (0) 765 732 799</h3>
                        <h4> Dar es Salaam, Tanzania</h4>
                        <h5>workspacecomputers@gmail.com</h5>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Footer
