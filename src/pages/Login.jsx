import React from 'react'
import { auth, provider } from '../utils/firebase';

const Login = (props) => {
    const loginfb = () => {
        auth().signInWithPopup(provider)
        .then(({user}) => {
            //  props.setUser(user);
            //  props.setLogin(true);
            props.history.push('/panel');
        });

    }
    const logoutfb = () => {
        auth().signOut().then(() => {
            props.history.push('/');
        });
    }
    return (
        <div className="Login">
            <div className="Login-container">
                <div className="Login-content">
                    <h2>Crear Cuenta o Iniciar Sesión</h2>
                    <button onClick={loginfb}>
                        <i className="fab fa-facebook-square" />
                        <span> Iniciar con Facebook</span>
                    </button>
                    <button onClick={logoutfb}>
                        Salir
                    </button>
                </div>    
            </div>
            
        </div>
    )
}

export default Login;


