import { FunctionComponent } from 'react'
import styles from './banner.module.scss'

type Props = {
  text: string,
  subText?: string
}

const Banner: FunctionComponent<Props> = ({ text, subText }) => {
  return (
    <header className={styles.banner}>
      <h1 className="bannerText">{ text }</h1>
      { subText ? <h3>{subText}</h3> : null}
    </header>
  )
}

export default Banner;