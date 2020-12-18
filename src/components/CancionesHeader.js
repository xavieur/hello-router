import React from 'react'
import { NavLink } from 'react-router-dom'

const CancionesHeader = () => (
    <header>
        <h1>Canciones</h1>
        <NavLink to='/' activeClassName='es-activo' exact={true}>Inicio</NavLink>
        <NavLink to='/create' activeClassName='es-activo'>Crear</NavLink>
        <NavLink to='/faq' activeClassName='es-activo'>FAQ</NavLink>
    </header>
)

export default CancionesHeader