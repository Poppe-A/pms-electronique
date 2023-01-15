import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './navbar.module.scss'
import Burger from '../burger/burger'
import { useState } from 'react';
const logo = require( '../../../public/images/logoPMS.png').default.src

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function toggleBurger() {
    setIsOpen(!isOpen);
  }

  const links = (
    <>
      <Link href="/">
        <a className={router.asPath === '/' ? styles.active : ""}>{"L'ATELIER"}</a>
      </Link>
      <Link href={`/services`}>
        <a className={router.asPath === '/services/' ? styles.active : ""}>{"NOS SERVICES"}</a>
      </Link>
      <Link href="/contact">
        <a className={router.asPath === '/contact/' ? styles.active : ""}>CONTACT</a>
      </Link>
    </>
  )
  return (
    <>
      <nav className={styles.navBar}>
        <img 
          src={logo} 
          alt="Logo PMS" 
        />
        <ul className={`${styles.mobile} ${isOpen ? styles.openMenu : ''}`}>
            {links}
        </ul>
        {/* backdrop only for mobile */}
        <div className={`${styles.backdrop} ${isOpen ? styles.openMenu : ''}`}></div>
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