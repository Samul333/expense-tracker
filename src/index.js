import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from './Context/Context'
import App from './App'
import './index.css'
ReactDOM.render(
<Provider>
<App/>
</Provider>
, document.getElementById('root'))