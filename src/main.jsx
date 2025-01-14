import { render } from 'preact'
import './index.css'
import { App } from './app'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

render(<App />, document.getElementById('app'))
