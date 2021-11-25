import React, {useEffect, useState} from 'react'
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';
function Usuario() {
    
    const [user, setUser] = useState({
        nombre:"",
        apellido:"",
        fecha_n:"",
    });
     

    useEffect(()=>{
        const token = localStorage.getItem('user');
        const decoded = jwt.verify(token, "pruebafullstack");
        const fecha = new Date(decoded.user.fecha_n);
        const fechaNormalizada = `${fecha.getDate() < 10 ? '0'+fecha.getDate()  : fecha.getDate() }-${fecha.getMonth()<10 ? '0'+fecha.getMonth() :fecha.getMonth()}-${fecha.getFullYear()}`
        
        setUser({
            nombre:decoded.user.nombre,
            apellido:decoded.user.apellido,
            fecha_n:fechaNormalizada,
        })
        // setUser(decoded.user)
    },[])

    
    return (
        <div className="informacion">
            <h3><span>Nombre:</span> {user.nombre}</h3>
            <h3><span>Apellido:</span> {user.apellido}</h3>
            <h3><span>Fecha de nacimiento:</span> {user.fecha_n}</h3>
            <nav>
                <a href="/promedio">Promedio de edades</a>
                <a href="/listado">Listado usuarios</a>
            </nav>

        </div>

    )
}

export default Usuario
