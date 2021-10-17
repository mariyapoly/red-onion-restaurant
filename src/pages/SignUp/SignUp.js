import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo2.png';
import './SignUp.css'

const SignUp = () => {

    const { signInUsignGoogle, createNewUser, signInUsingGithub, logOut, signInUsignFaceBook, error } = useFirebase();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => createNewUser(data.email, data.password);

    return (
        <div className="section-bg">
            <Container>
                <div className="input-form">
                    <NavLink className="logo" to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Name" {...register("name")} />
                        <input placeholder="Email" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <input type="password" placeholder="Password" {...register("password")} />
                        <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
                        <p>{error}</p>
                        <input className="signin-btn" type="submit" value="Sign Up" />
                    </form>
                    <div>
                        <NavLink className="account-link" to="/login">Already have an account</NavLink>
                    </div>
                    <button onClick={signInUsignGoogle}>Google Signin</button>
                    <button onClick={signInUsignFaceBook}>Facebook Signin</button>
                    <button onClick={signInUsingGithub}>github Signin</button>
                    <button onClick={logOut}>log out</button>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;