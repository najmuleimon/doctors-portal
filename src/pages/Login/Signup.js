import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-full flex items-center justify-center h-screen">
            <div className="card w-full max-w-lg shadow-xl bg-base-100">
                <div className="card-body">

                    {/* title */}
                    <h2 className="text-center text-xl font-medium">Sign Up</h2>

                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Please provide your name"
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.name.message}</p>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Please provide your email"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Please provide a valid email"
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text-sm font-normal text-red-500'>{errors.email.message}</p>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Please provide your password"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: "Password must be minimum eight characters(at least one letter and one number)"
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className='text-sm font-normal text-red-500'>{errors.password.message}</p>}
                                {errors.password?.type === 'pattern' && <p className='text-sm font-normal text-red-500'>{errors.password.message}</p>}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-accent text-base-100">Sign Up</button>
                        </div>
                    </form>

                    {/* login page link */}
                    <p><small>Already have an account? <Link className='text-secondary' to="/login">Login</Link></small></p>
                    <div className="divider">OR</div>

                    {/* google login button */}
                    <button className="btn btn-outline hover:bg-accent">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;