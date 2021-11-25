import React, {useState, useEffect} from 'react'

function Promedio() {
    const [promedio, setPromedio] = useState("");

    const obtenerPromedio = async () => {
        const query = await fetch('https://fullstack-challenge-z.herokuapp.com/api/users/prom')
        const res = await query.json();
        setPromedio(res.prom);
    }

    useEffect(()=>{
        obtenerPromedio();
    },[])
    return (
        <div className="promedio">
            <h2>Promedio de edades</h2>
            <h3>{promedio}</h3>
            <nav>
                <a href="/usuario">Ver mis datos</a>
                <a href="/listado">Listado usuarios</a>
            </nav>
        </div>
    )
}

export default Promedio
