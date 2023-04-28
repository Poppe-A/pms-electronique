import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './navbar.module.scss'
import Burger from '../burger/burger'
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logoPMS.png'
export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function toggleBurger() {
    setIsOpen(!isOpen);
  }

  const links = (
    <>
      <Link href="/" className={router.asPath === '/' ? styles.active : ""}>
        {"L'ATELIER"}
      </Link>
      <Link href={`/services`} className={router.asPath === '/services/' ? styles.active : ""}>
        NOS SERVICES
      </Link>
      <Link href="/contact" className={router.asPath === '/contact/' ? styles.active : ""}>
        CONTACT
      </Link>
    </>
  )
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logo}>
          <Image 
            src={logo}
            alt="Logo PMS" 
            fill
            objectFit='cover'
          />
        </div>
      
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