import { FunctionComponent } from 'react'
import styles from './serviceCard.module.scss'
import Image from 'next/image'
import { ServiceContent } from '../../pages/services'

const ServiceCard: FunctionComponent<ServiceContent> = (props: ServiceContent ) => {
  const {title, text, imageName, small } = props

  const renderText = () => {
    return text.map((t, index) => <p key={index}>{t}</p>)
  }

  return (
    <article className={styles.card}>
        {/* <Image 
          className={styles.cardImage}
          src={`/images/services/${imageName}.webp`}
          alt={`Picture of an ${imageName}`}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        /> */}
        <h3>{title}</h3>
        <div className={small ? styles.small : ''}>
          {renderText()}
        </div>
    </article>
   
  )
}

export default ServiceCard;