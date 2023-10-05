import React, { Ref } from 'react'
import { InputProps } from 'modules/ModuleTypes'
import classes from './Input.module.css'

const Input = React.forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  )
})

export default Input
