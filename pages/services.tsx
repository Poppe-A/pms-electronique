import { NextPage } from "next"
import Head from "next/head"
import image from "next/image"
import React from "react"
import Banner from "../components/common/banner/banner"
import Layout from "../components/common/layout"
import ServiceCard from "../components/services/ServiceCard"
import styles from "../styles/services.module.scss"

export type ServiceContent = {
  id?: number,
  title: string
  text: string[],
  imageName: string,
  small?: boolean
}

const serviceContent: ServiceContent[] = [
  {
    id: 1,
    title: '- Révision -',
    text: [
      'Démontage et Dépoussiérage',
      'Refection soudures et contacts',
      'Serrage vis et connexions',
      'Vérification des composants principaux',
      'Nettoyage potentiomètres et jacks',
      'Vérification des tensions',
      'Contrôle des tubes et réglage du bias (suivant le type de matériel)',
      'Banc de test sur charge résistive',
      'Essais'
    ],
    imageName: 'lampemetre'
  },
  {
    id: 2,
    title: '- Optimisation -',
    text: [
      'Sélection des tubes et/ou composants', 
      'Réglage de bias', 
      'Modifications afin d\'obtenir le meilleur résultat en termes de qualité sonore et de sensation de jeux ( cela après discussion afin de cerner vos besoins)'
  ],
    small: true,
    imageName: 'lampemetre'
  },
  {
    id: 3,
    title: '- Dépannage et rénovation -',
    text: [
      'Recherche des causes de dysfonctionnement',
      'Correctif (soudures, remplacement de composant ...)',
      'Vérification tensions',
      'Banc de test et essais',
    ],
    small: true,
    imageName: 'lampemetre'
  },
  {
    id: 4,
    title: '- Controle -',
    text: [
      'Nettoyage',
      'Verification des tensions',
      'Nettoyage potentiometres et jacks',
      'Refection soudures sur sur partie accessibles et visibles',
      'Contrôle des tubes et réglage du bias ( suivant le type de matériel)',
      'Banc de test sur charge résistive',
      'Essais' 
    ],
    imageName: 'lampemetre'
  },
]

const Services: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{"PMS électronique - Spécialiste de l'amplification à lampes"}</title>
        <meta name="description" content="Réparation, révision, modification sur amplis à lampes, materiel audio et instruments" />
        <meta property="og:title" content="PMS électronique - Spécialiste de l'amplification à lampes" />
        <meta
          property="og:description"
          content="Réparation, révision, modification sur amplis à lampes et materiel audio" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner text="Nos services" subText="Decouvrez nos activités plus en détail"/>

     
      <section className={styles.servicesContainer}>
        {serviceContent.map((elm) => <React.Fragment key={elm.id}>
          <ServiceCard title={elm.title} text={elm.text} imageName={elm.imageName} small={elm.small}/>
          <div className={styles.separator}></div>
        </React.Fragment>)}
        <div>
          <p className={styles.detailText}>{`L'atelier est équipé en : oscilloscopes, générateur de fréquence, multimètre, lampe-mètre, testeur de composants actifs, charges fictives, ...`}</p>
          <p className={styles.detailText}>{`Nos composants sont choisis au mieux afin de respecter l'appareil tout en se conformant aux schémas, selon vos attentes en terme de son`}</p>
        </div>
        </section>
      
    </Layout>
  )
}

export default Services