import React, {useState, useEffect} from 'react'
import {List, ListItem} from '@mui/material'
function ListadoUsuarios() {

    const [users, setUsers] = useState([]);

    const obtenerUsuario = async () => {
        const query = await fetch('https://fullstack-challenge-z.herokuapp.com/api/users')
        const res = await query.json();
        setUsers(res.users);
    }

    useEffect(()=>{
        obtenerUsuario();
    },[])

    return (
        <div className="informacion">
            <List>
                {users.map(user => (
                    <ListItem>
                        <div>
                        <p>{user.nombre}</p>
                        <p>{user.apellido}</p>
                        <p>{user.fecha_n}</p>
                        </div>
                    </ListItem>
                ))}
            </List>
            <nav>
                <a href="/usuario">Ver mis datos</a>
                <a href="/promedio">Promedio de edades</a>
            </nav>
        </div>
    )
}

export default ListadoUsuarios
