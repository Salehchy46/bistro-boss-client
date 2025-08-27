import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    console.log(watch('example'));

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input {...register("name", {required: true})} type="name" name='name' className="input" placeholder="Enter Your Name" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                                <label className="label">Email</label>
                                <input {...register("email", {required: true})} type="email" name='email' className="input" placeholder="Email" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                                <label className="label">Password</label>
                                <input {...register("password", {required: true, minLength: 6 ,maxLength: 16})} type="password" name='password' className="input" placeholder="Password" />
                                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                                <button className="btn btn-neutral mt-4">Sign Up</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;