import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-full flex items-center justify-center h-screen">
            <div className="card w-full max-w-lg shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-center text-xl font-medium">Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent text-base-100">Login</button>
                    </div>

                    <p><small>New to Doctors Portal? <Link className='text-secondary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline hover:bg-accent">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;