import { useContext, useEffect, useState } from 'react'
import { HeaderCartButtonProps } from 'modules/ModuleTypes'
import CartIcon from 'components/Cart/CartIcon'
import CartContext from 'context/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  const cartCtx = useContext(CartContext)
  const [btnIsHighLighted, setButtonIsHighlighted]= useState(false)
  const { items } = cartCtx
  
  const numberOfCartItems = items.reduce((totalNumber: number, item: {amount: number})=>{
    return totalNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${ btnIsHighLighted && classes.bump }`

  useEffect(() => {
    if(items.length === 0) return

    setButtonIsHighlighted(true)

    const timer = setTimeout(()=>{
      setButtonIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])
  
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
