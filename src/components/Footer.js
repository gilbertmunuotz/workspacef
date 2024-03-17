import React from 'react';
import { FaInstagram } from "react-icons/fa"; // Fa for FontAwesome

function Footer() {
    return (
        <div className="Footer">
            <div className="bg-black text-white p-16">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="mx-10">
                        <a href="http://www.instagram.com/computers_accessories_dsm" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} className="ml-24" />
                        </a>
                        <h1>Workspace Computers Limited</h1>

                        <a href="Workspace Profile.png" download>
                            <h2>Get Our Company Profile Here</h2>
                        </a>
                    </div>

                    <div className="mx-10">
                        <h2>P. O. Box 34555</h2>
                        <h3>+255 (0) 765 732 799</h3>
                        <h4>Dar es Salaam, Tanzania</h4>
                        <h5>workspacecomputers@gmail.com</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
