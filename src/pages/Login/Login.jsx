import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const captchRef = useRef(null)
    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, []);

    const handlelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    const handleValidateCaptcha = e => {
        e.preventDefault();
        const user_captcha_value = captchRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                    <form className="card-body" onSubmit={handlelLogin}>
                        <fieldset className="fieldset">
                            <div>
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                            </div>
                            <div className='text-center'>
                                <label htmlFor="" className='label'>
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchRef} name='captcha' className='input' placeholder='Input the Captcha' />
                                <button className="btn btn-outline btn-xs text-center mt-3" onClick={handleValidateCaptcha}>Validate</button>
                            </div>
                            <div className='mt-6'>
                                <input disabled={disabled} className='btn btn-primary' type="submit" value="Log-in" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;