import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
            <div>
                <div className="hero bg-base-200 dark:bg-white min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold dark:text-black">Register now!</h1>
                        </div>
                        <div className="card bg-base-100 dark:bg-white w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label dark:text-[#333333]">Name</label>
                                    <input type="text" className="input dark:bg-white dark:text-[#333333] dark:border-[#d3d3d3]" placeholder="Name" />
                                    <label className="label dark:text-[#333333]">Email</label>
                                    <input type="email" className="input dark:bg-white dark:text-[#333333] dark:border-[#d3d3d3]" placeholder="Email" />
                                    <label className="label dark:text-[#333333]">Password</label>
                                    <input type="password" className="input dark:bg-white dark:text-[#333333] dark:border-[#d3d3d3]" placeholder="Password" />
                                    <label className="label dark:text-[#333333]">Confirm Password</label>
                                    <input type="password" className="input dark:bg-white dark:text-[#333333] dark:border-[#d3d3d3]" placeholder="Confirm Password" />
                                    <button className="btn btn-neutral mt-4 bg-[#527A9A] text-white border-none dark:border-none">Register</button>
                                </fieldset>
                            </div>
                            <p className="px-6 mb-6 dark:text-[#333333]">You have an account? <Link className="text-blue-800 font-medium" to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;