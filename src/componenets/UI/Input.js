import classes from './Input.module.css';
import react from 'react';

const Input = react.forwardRef((props,ref) => {
    return (
        <div className={classes.input}>
            <label>{props.label}</label>
            <input ref = {ref} {...props.input} />
        </div>
    )
})

export default Input;