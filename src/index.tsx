import { render } from 'react-dom'
import classes from './style.module.scss'

render(
    <div><button className={classes.btn}>Click</button></div>,
    document.getElementById('root')
)
