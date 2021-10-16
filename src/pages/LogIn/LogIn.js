import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo2.png';

const LogIn = () => {
    const { signInUsignGoogle, user, signInUser, signInUsingGithub, logOut, signInUsignFaceBook, error } = useFirebase();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => signInUser(data.email, data.password);

    return (
        <div className="section-bg">
            <Container>
                <div className="input-form">
                    <p>{user.displayName}</p>
                    <NavLink className="logo" to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Email" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <input type="password" placeholder="Password" {...register("password")} />
                        <p>{error}</p>
                        <input className="signin-btn" type="submit" value="Login" />
                    </form>
                    <div>
                        <NavLink className="account-link" to="/signup">Create new account</NavLink>
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

export default LogIn;