import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './sass/style.scss'

const CancionesHome = () => (
    <div>Bienvenidos a la web de canciones</div>
)

const CancionesCreate = () => (
    <div>Crear una canción</div>
)

const CancionesEdit = () => (
    <div>Editar una canción</div>
)

const CancionesFAQ = () => (
    <div>Preguntas frecuentes sobre Canciones</div>
)

const Canciones404 = () => (
    <div>Oooops! No hay canciones por aquí! <Link to='/'>Prueba en la página de Inicio</Link></div>
)

const CancionesHeader = () => (
    <header>
        <h1>Canciones</h1>
        <Link to='/'>Inicio</Link>
        <Link to='/create'>Crear</Link>
        <Link to='/edit'>Edit</Link>
        <Link to='/faq'>FAQ</Link>
    </header>
)

const CancionesApp = () => (
    <BrowserRouter>
        <div>
            <CancionesHeader />
            <Switch>
                <Route path='/' component={CancionesHome} exact={true} />
                <Route path='/create' component={CancionesCreate} />
                <Route path='/edit' component={CancionesEdit} />
                <Route path='/faq' component={CancionesFAQ} />
                <Route component={Canciones404} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(<CancionesApp />, document.querySelector('#appRoot'))