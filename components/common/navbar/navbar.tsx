import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './navbar.module.scss'
import Burger from '../burger/burger'
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function toggleBurger() {
    console.log("ergergerg", isOpen)
    setIsOpen(!isOpen);
  }
  


  const links = (
    <>
      <Link href="/">
        <a className={router.asPath === '/' ? styles.active : ""}>{"L'ATELIER"}</a>
      </Link>
      <Link href="/contact">
        <a className={router.asPath === '/contact' ? styles.active : ""}>CONTACT</a>
      </Link>
    </>
  )
  return (
    <>
      <nav className={styles.navBar}>
        <h1>PMS Electronique</h1>
        <ul className={`${styles.mobile} ${isOpen ? styles.openMenu : ''}`}>
          {links}
      </ul>
        <ul className={styles.desktop}>
          {links}
        </ul>
        <div className={styles.burger} onClick={() => toggleBurger()}>
          <Burger isOpen={isOpen}/>
        </div>
      </nav>
    </>
  )
}