import React from 'react'
import ReactDOM from 'react-dom'
import CancionesRouter from './routers/CancionesRouter'
import 'normalize.css/normalize.css'
import './sass/style.scss'

ReactDOM.render(<CancionesRouter />, document.querySelector('#appRoot'))