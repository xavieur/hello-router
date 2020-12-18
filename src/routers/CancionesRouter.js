import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import CancionesHeader from '../components/CancionesHeader'
import CancionesHome from '../components/CancionesHome'
import CancionesCreate from '../components/CancionesCreate'
import CancionesEdit from '../components/CancionesEdit'
import CancionesFAQ from '../components/CancionesFAQ'
import Canciones404 from '../components/Canciones404'

const CancionesRouter = () => (
    <BrowserRouter>
        <div>
            <CancionesHeader />
            <Switch>
                <Route path='/' component={CancionesHome} exact={true} />
                <Route path='/create' component={CancionesCreate} />
                <Route path='/edit/:id' component={CancionesEdit} />
                <Route path='/faq' component={CancionesFAQ} />
                <Route component={Canciones404} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default CancionesRouter