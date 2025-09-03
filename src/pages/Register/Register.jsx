import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('User Profile info updated.');
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
    }

    console.log(watch('example'));

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
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
                                    <input {...register("name", { required: true })} type="name" name='name' className="input" placeholder="Enter Your Name" />
                                    <label className="label">PhotoURL</label>
                                    {errors.name && <span className='text-red-600'>Name is required</span>}
                                    <input {...register("photoURL", { required: true })} type="text" className="input" placeholder="Photo URL" />
                                    {errors.photoURL && <span className='text-red-600'> Photo URL is required</span>}
                                    <label className="label">Email</label>
                                    <input {...register("email", { required: true })} type="email" name='email' className="input" placeholder="Email" />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}
                                    <label className="label">Password</label>
                                    <input {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 16,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/
                                    })} type="password" name='password' className="input" placeholder="Password" />
                                    {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 charactered</span>}
                                    {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less than 20 charactered</span>}
                                    {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have an uppercase, a lowercase, a number and a special character</span>}
                                    <input type="submit" value="Sign Up" className="btn btn-neutral mt-4" />
                                </fieldset>
                            </form>
                            <p className='m-4'><small>Already have in account? <Link className='font-bold' to='/login'>Login</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;