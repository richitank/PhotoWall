import React from 'react'// We import 'react' library's methods w/ the help of variable name React
import ReactDom from 'react-dom'
import Main from './Components/Main'
import './styles/stylesheet.css'

ReactDom.render(<Main/>, document.getElementById("root"));