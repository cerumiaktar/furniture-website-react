import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold">Register now!</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" className="input" placeholder="Name" />
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />
                                    <label className="label">Confirm Password</label>
                                    <input type="password" className="input" placeholder="Confirm Password" />
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </div>
                            <p className="px-6 mb-6">You have an account? <Link className="text-blue-800 font-medium" to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;