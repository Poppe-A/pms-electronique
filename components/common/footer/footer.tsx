import styles from './footer.module.scss'
import Divider from '../divider'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Divider />
      <p>Copyright | PMS électronique | Tout droits réservés</p>
    </footer>
  )
}