

const Contact = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between mt-12 gap-6">
            <div className="bg-gray-50 w-6/12 rounded-xl shadow-2xl space-y-4 border border-[#00000040] px-5 py-8">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl">Name</legend>
                    <input type="text" className="input w-full" placeholder="Enter your Name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl">Phone Number</legend>
                    <input type="text" className="input w-full" placeholder="Enter your Phone Number" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl">Email</legend>
                    <input type="email" className="input w-full" placeholder="Enter your Email" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl">Message</legend>
                    <textarea className="textarea w-full" placeholder="Enter your text"></textarea>
                </fieldset>
                <button className="btn w-full bg-[#527A9A] text-lg text-white">Submit</button>
            </div>
            <div className="w-6/12">
                <div
                    className="hero h-[554px] rounded-xl"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/9kh8LGwc/contact-image.png)",
                    }}
                >
                    {/* <div className="hero-overlay"></div> */}
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md ">
                            <h1 className="mb-5 text-3xl font-bold">Contact</h1>
                            <p className="mb-5 text-lg">Address: Mohammadpur,Dhaka</p>
                            <p className="mb-5 text-lg">Phone Number: +8801323456789 </p>
                            <p className="mb-5 text-lg">Email: info@gmail.com </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;