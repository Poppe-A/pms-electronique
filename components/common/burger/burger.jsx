import styles from './burger.module.scss'
import { useEffect, useState } from 'react';

export default function Burger({ isOpen }) {

  const [openBurgerStyle, setOpenBurgerStyle] = useState('');

  useEffect(() => {
    setOpenBurgerStyle(isOpen ? styles.open : '');   
  }, [isOpen])

  return (
  <div className={[styles.burger, openBurgerStyle].join(' ') }>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  
  )
}

