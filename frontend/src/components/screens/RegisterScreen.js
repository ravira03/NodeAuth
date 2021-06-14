import { useState } from 'react';



import { Link } from 'react-router-dom';

import "./RegisterScreen.css";

const RegisterScreen = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    return(
        <div className="register-screen">
            <form className="register-screen__form">
                <h3 className="register-screen__title">Register</h3>
                <div className="form-group">
                    <label htmlFor="name">UserName:</label>
                    <input type="text" required id="name" placeholder="Enter UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" required id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" required id="password" placeholder="Enter a password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input type="confirmpassword" required id="confirmpassword" placeholder="Enter a password again" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>

                <span className="register-screen__subtext">Already have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>

        

    );
};

export default RegisterScreen;