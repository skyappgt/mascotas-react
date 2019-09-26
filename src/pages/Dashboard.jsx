import React from 'react'
import Form from '../components/Form'

const Dashboard =()=>(
    <div className="Dashboard">
        <div className="Dashboard-container">
            <div className="Dashboard-content">
                
                <Form/>
                <div className="Dashboard-profile">
                <h2>Perfil</h2>
                <div className="Dashboard-profile-info">
                    <img src="" alt="Nombre Usuario"/>
                    <span>Nombre</span>
                    <h4>Romeo Catalán</h4>
                    <span>Correo</span>
                    <h4>romeo@mail.com</h4>
                    <button>Salir</button>
                </div>
            </div>
            </div>
        </div>
    </div>
);

export default Dashboard;