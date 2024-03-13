import React from 'react'

function Form() {
    return (
        <div className="Form">
            <h1 className="text-4xl text-center my-6 font-serif mt-24">Contact Us</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-12">
                <form className="mx-12">
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
                            className="bg-gray-200 rounded"
                            name="usermessage"
                            id="usermessage"
                            cols="38"
                            rows="5"
                            aria-invalid="false"
                            // onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="bg-blue-700 px-4 py-2 rounded-xl col-start-2">Send</button>

                </form>

                <section className="self-center text-lg mx-10">
                    <h6>Get in touch</h6>
                    <p>Send us a message and we'll get back to you as soon as we can.</p>
                </section>
            </div>
        </div>
    )
}

export default Form