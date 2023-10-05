import Input from 'components/UI/Input/Input'
import classes from './MealItemForm.module.css'
import React, { useRef, useState } from 'react'
import { MealItemFormType } from 'modules/ModuleTypes'

const MealItemForm = (props: MealItemFormType) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (event: React.FormEvent) => {
    event?.preventDefault()

    let enteredAmount = ''
    if (amountInputRef.current) { enteredAmount = (amountInputRef.current as HTMLInputElement).value; }
    const enteredAmountNumber = +enteredAmount

    if (enteredAmount.trim().length === 0 || 
        enteredAmountNumber < 1 || 
        enteredAmountNumber > 5
        ) {
          setAmountIsValid(false)
          return;
    }
    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input 
        ref={amountInputRef}
        label="Amount" 
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter Valid Amount</p>}
    </form>
  )
}

export default MealItemForm