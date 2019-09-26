import React from 'react';
import { storage, database } from '../utils/firebase';


const Form = ()=> {
    const onChange = event =>{
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name =  (+new Date()) + '-' + file.name;
        const fileUpload = storageRef.child(name).put(file);
        fileUpload.then((snapshot)=>{
            snapshot.ref.getDownloadURL()
            .then(downURL=>console.log(downURL));
        });
    }
    return (
    <div className="Form">
        <div className="Form-head">
            <h2>Encabezado</h2>
        </div>
        <div className="Form-item">
            <form action="">
                <input type="text" name="name" placeholder="Nombre de La mascota" />
                <input type="text" name="descripcion" placeholder="Describe la Mascota" />
                
                <select name="type" >
                    <option defaultValue disabled >Seleccionar</option>
                    <option value="cat">Gato</option>
                    <option value="dog">Perro</option>
                </select>
                <select name="gender" >
                    <option defaultValue disabled >Seleccionar</option>
                    <option value="femenino">Masculino</option>
                    <option value="masculino">Femenino</option>
                </select>
                <select name="adopt" >
                    <option defaultValue disabled >Seleccionar</option>
                    <option value="give">Dar en Adopción</option>
                    <option value="care">Cuidar</option>
                    <option value="adopt">Adoptar</option>
                </select>

                <input onChange={onChange} type="file" className="file"/>
                <button>Enviar</button>
            </form>
        </div>
    </div>
    );
}

export default Form;