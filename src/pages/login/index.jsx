import React, { useState } from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const userDados = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const realizaLogin = (e) => {
        e.preventDefault();

        if (user.email === "admin@unigran.com" && user.password === "123456") {
             navigate("/dashboard");
        } else {
            navigate("/products");
        }
    };

    return (
        <div>
            <div className='containerLogoTitutlo'>
                <h1>UnigranStore</h1>
                <img src="/images/logoUnigran.jpg" alt="logo da instituição Unigran" height={"200px"} />
            </div>

            <div className='containerLogin'>
                <h3 id='tituloLogin'>UnigranStore</h3>

                <form onSubmit={realizaLogin}>
                    <div>
                        <input
                            placeholder='email'
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={userDados}
                            required
                        />
                    </div>
                    <div>
                        <input
                            placeholder='password'
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={userDados}
                            required
                        />
                    </div>

                    <div className='confirmaLogin'>
                        <input type="checkbox" />Lembrar-me

                        <button id='loginButton' type="submit">Log in</button>
                    </div>
                </form>

                <div className="cadastro">
                    <p>Não possui conta?</p>
                    <a href="" onClick={(e) => {
                        e.preventDefault();
                        navigate("/signUp");
                    }}>Cadastre-se</a>
                </div>
            </div>
        </div>
    );
}
