import React from 'react'

function Form() {
    return (
        <div className="Form">
            
            <h1 className="text-4xl text-center my-6 font-serif mt-24">Contact Us</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-12">
                <form className="mx-12 sm:ml-40">
                    <div className="row-1">
                        <label htmlFor="name">Name:</label> <br />
                        <input
                            className="bg-gray-200 rounded px-14 py-2 my-4"
                            type="text"
                            name="name"
                            id="name"
                            // onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="row-2">
                        <label htmlFor="email">Email:</label> <br />
                        <input
                            className="bg-gray-200 rounded px-14 py-2 my-4"
                            type="email"
                            name="email"
                            id="email"
                            // onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="row-start-2">
                        <label htmlFor="message">Message:</label> <br />
                        <textarea
                            className="bg-gray-200 rounded sm:w-96"
                            name="usermessage"
                            id="usermessage"
                            cols="45"
                            rows="5"
                            aria-invalid="false"
                            // onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="bg-blue-600 px-4 py-2 rounded-xl col-start-2">Send</button>

                </form>

                <section className="mx-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.5010817584357!2d39.23207119905056!3d-6.769324976147966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4e8481806ed9%3A0xf46d96f060c56637!2sKasimpya%20Rd%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1710382248494!5m2!1sen!2stz"
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