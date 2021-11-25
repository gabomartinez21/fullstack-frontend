import React, {useState} from 'react'
import {FormControl, FormGroup, TextField, Button} from '@mui/material'
import { useSnackbar  } from 'notistack';
import jwt from 'jsonwebtoken';


function Formulario() {
     const [user, setUser] = useState({
        nombre:'',
        apellido:'',
        fecha_n:'',
    });
    
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = e => setUser({...user, [e.target.name]:e.target.value})
    
    const handleRegister = async (e) => {
        e.preventDefault();
        if(user.nombre !== '' && user.apellido !== '' && user.fecha_n){
        const query = await fetch('https://fullstack-challenge-z.herokuapp.com/api/users', {
            method:'POST',
            mode:'cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const res = await query.json();

        if(res.ok){
            const token = jwt.sign({ user }, "pruebafullstack");
            localStorage.setItem("user", token)
            enqueueSnackbar('Te has registrado exitosamente', { 
                variant: 'success',
            });
            window.location.href='/usuario';
        }

        }

    }
    return (
        <form onSubmit={handleRegister}>
            <FormGroup>
                <FormControl margin="dense">
                <TextField 
                    name="nombre" 
                    label="Nombre" 
                    variant="outlined" 
                    onChange={handleChange}
                    value={user.nombre}
                />
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl margin="dense">
                <TextField 
                    name="apellido" 
                    label="Apellido" 
                    variant="outlined" 
                    onChange={handleChange}
                    value={user.apellido}
                />
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl margin="dense">
                <TextField 
                    type="date"
                    name="fecha_n"
                    variant="outlined" 
                    onChange={handleChange}
                    value={user.fecha_n}
                />
                </FormControl>
            </FormGroup>
            <Button type="submit" variant="contained">Registrar</Button>
        </form>
    )
}

export default Formulario
