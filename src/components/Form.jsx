import React, { useState, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

function Form() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const nameRef = useRef(null);
    const messageRef = useRef(null);
    const emailRef = useRef(null);

    function HandleSubmit(event) {
        event.preventDefault();

        const url = 'https://workspaceb.vercel.app/api/users';
        const UserData = { name, email, message };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(UserData), // Stringify data into JSON
            mode: 'no-cors'
        };

        fetch(url, requestOptions)
            // console.log(UserData)
            .then(response => {
                if (!response.ok) {
                    return response.text().then(error => {
                        console.error('Error sending data:', error);
                        toast.error("Error sending data");
                    });
                }
                return response.json(); // Assuming successful JSON response
            })
            .then(data => {
                // Handle successful response (data might be the saved user object)
                console.log('Success:');
                toast.success('Thank You For your Contacting us. \nWe will respond to you Soon');
                // Clear form fields
                nameRef.current.value = '';
                emailRef.current.value = '';
                messageRef.current.value = '';
            })
            .catch(error => {
                console.error('Error sending data:', error);
                toast.error('An error occurred. Please try again later.');
            });

    }
    return (
        <div className="Form">

            <h1 className="text-4xl text-center my-6 font-serif mt-24">Contact Us</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-12">
                <form onSubmit={HandleSubmit} className="mx-12">
                    <div className="row-1">
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input
                            className="bg-gray-200 rounded px-4 py-2 my-4 sm:px-6" // Added responsive padding
                            type="text"
                            name="name"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            required
                            ref={nameRef}
                        />
                    </div>

                    <div className="row-2">
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input
                            className="bg-gray-200 rounded px-4 py-2 my-4 sm:px-6" // Added responsive padding
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            ref={emailRef}
                        />
                    </div>

                    <div className="row-start-2">
                        <label htmlFor="message">Message:</label>
                        <br />
                        <textarea
                            className="bg-gray-200 rounded sm:w-80" // Responsive width on small screens
                            name="usermessage"
                            id="usermessage"
                            cols="30"
                            rows="5"
                            aria-invalid="false"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            ref={messageRef}
                        />
                    </div>

                    <button type="submit" className="bg-blue-600 px-4 py-2 rounded-xl col-start-2">Send</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </form>


                <section className="mx-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.4079634277552!2d39.285749069569654!3d-6.814553367943241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4f2e13a38a27%3A0xecce4ec45e022a1b!2sWorkspace%20Computers%20Limited!5e0!3m2!1sen!2stz!4v1711414187012!5m2!1sen!2stz"
                        className='sm:p-4'
                        width="100%"
                        height="400"
                        title='maps'
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </div>
        </div>
    )
}

export default Form

