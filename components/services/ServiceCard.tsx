import { FunctionComponent } from 'react'
import styles from './serviceCard.module.scss'
import Image from 'next/image'
import { ServiceContent } from '../../pages/services'

const ServiceCard: FunctionComponent<ServiceContent> = (props: ServiceContent ) => {
  const {title, text, imageName, small } = props

  const renderText = () => {
    // return "ooo"
    return text.map((t) => <p key={text.length}>{t}</p>)
  }

  return (
    <article className={styles.card}>
        <h3>{title}</h3>
        <div className={small ? styles.small : ''}>
          {renderText()}
        </div>
    </article>
   
  )
}

export default ServiceCard;