import { FaSquareFacebook,FaSquareInstagram,FaLinkedin,FaSquareYoutube } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className="">
            <div className="container mx-auto flex flex-col md:flex-row justify-between mt-12 gap-6">
                <div className="bg-gray-50 md:w-6/12 rounded-xl shadow-2xl space-y-4 border border-[#00000040] px-5 py-8">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl dark:text-black">Name</legend>
                        <input type="text" className="input w-full dark:bg-white dark:text-[#333333] dark:border-[#d3d3d3]" placeholder="Enter your Name" />
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
                <div className="md:w-6/12">
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
                                <div className="flex items-center gap-4 justify-center">
                                    <p className="text-2xl"><FaSquareFacebook /></p>
                                    <p className="text-2xl"><FaSquareInstagram /></p>
                                    <p className="text-2xl"><FaLinkedin /></p>
                                    <p className="text-2xl"><FaSquareYoutube /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-18">
                <div className="container mx-auto mb-4">
                    <p>Address: Dhaka, Bangladesh <span className="font-medium text-red-700">Get Direction</span> </p>
                </div>
                <img src="https://i.ibb.co.com/wZZb1J3V/Frame-69.png" alt="" />
            </div>
        </div>
    );
};

export default Contact;