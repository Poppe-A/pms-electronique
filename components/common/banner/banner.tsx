import { FunctionComponent } from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'

type Props = {
  text: string,
  subText?: string
}

const Banner: FunctionComponent<Props> = ({ text, subText }) => {
  return (
    <header className={styles.banner}>
        <Image 
          className={styles.bannerImage}
          src="/images/tubeamp.webp"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      <h1 className="bannerText">{ text }</h1>
      { subText ? <h2>{subText}</h2> : null}
    </header>
  )
}

export default Banner;