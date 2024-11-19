import React, { useState } from 'react';

const Form = () => {
    const [Enquiry, setEnquiry] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [country, setCountry] = useState("");
    const [requirement, setRequirement] = useState("");

    return (
        <>
            <div className=" fixed right-0 left-0 bg-blue-700 flexjustify-center w-full p-6">
                <h3 className="text-white text-2xl mb-4">Send us a message</h3>
                <h4 className="text-white mb-4">We'd love to hear from you!</h4>
                <form>

                    {/* Parent div to create a flex layout */}
                    <div className="flex space-x-4">

                        {/* Left column */}
                        <div className="flex-1 space-y-4">
                            <input
                                placeholder="How can we help you"
                                type="text"
                                className="w-full p-2 border rounded"
                            />
                            <input
                                placeholder="Business email address"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                placeholder="First name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                placeholder="Last name"
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                placeholder="Phone"
                                type="number"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Right column */}
                        <div className="flex-1 space-y-4">
                            <input
                                placeholder="Job Title"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                placeholder="Company Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                placeholder="Country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                placeholder="Tell us briefly about your requirement"
                                type="text"
                                value={requirement}
                                onChange={(e) => setRequirement(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                            <button className='bg-slate-100 p-3 rounded- '>Submit</button>
                        </div>

                    </div>

                </form>
            </div>
        </>
    );
};

export default Form;
