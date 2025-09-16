import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 dark:bg-white min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold dark:text-black">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 dark:bg-white w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label dark:text-[#333333]">Email</label>
                                <input type="email" className="input dark:bg-white dark:text-[#333333] dark:border-[#d3d3d3]" placeholder="Email" />
                                <label className="label dark:text-[#333333]">Password</label>
                                <input type="password" className="input dark:bg-white dark:text-[#333333] dark:border-[#d3d3d3]" placeholder="Password" />
                                <div><a className="link link-hover dark:text-red-500">Forgot password?</a></div>
                                <button className="btn bg-[#527A9A] mt-4 dark:border-none">Login</button>
                            </fieldset>
                        </div>
                        <p className="px-6 mb-6 dark:text-[#333333]">Dont have an account? <Link className="text-blue-800 font-medium" to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;