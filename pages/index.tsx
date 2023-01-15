/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'
import Layout from '../components/common/layout'
import Divider from '../components/common/divider'
import Banner from '../components/common/banner/banner'
import { request } from "../libs/datocms";
import { useEffect, useState } from "react";
const serviceImg = require( '../public/images/ampeg.webp').default.src
const expertiseImg = require('../public/images/orange.webp').default.src
const commimentsImg = require('../public/images/fender.webp').default.src

const PRICE_QUERY = `query HomePage {
  prix {
    tarif
  }
}`;

const Home: NextPage = () => {
  const [price, setPrice] = useState<Number>()

  useEffect(() => {
    request({
      query: PRICE_QUERY,
      variables: {},
      preview: null
    }).then(res => {
      setPrice(res.prix.tarif)
    })
  }, [])

  return (
    <Layout>
      <Head>
        <title>PMS électronique - {"Spécialiste de l'amplification à lampes"} | </title>
        <meta name="description" content="Réparation, révision, modification sur amplis à lampes, materiel audio et instruments" />
        <meta property="og:title" content="PMS électronique - Spécialiste de l'amplification à lampes" />
        <meta
          property="og:description"
          content="Réparation, révision, modification sur amplis à lampes et materiel audio" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner text="PMS électronique" subText="Spécialiste de l'amplification à lampes"/>
      <section className={styles.hero}>
        <h2>{"P.M.S électronique est un atelier spécialisé dans la réparation des amplificateurs instruments et autre matériel audio"} </h2>
        <p>{"Localisé en région Nantaise, PMS électronique s'adresse aussi bien aux particuliers qu'aux professionnels soucieux d'un service réactif et de qualité"}</p>
      </section>

      <Divider />

      <section className={styles.homeSection}>
        <article className={[styles.imageOnRight, styles.homeArticle].join(' ')}>
          <div className={styles.textContainer}>
            <h3>Nos Services</h3>
            <h4 className={styles.subTitle}>Sur amplis à lampes ou transistors (instruments et hifi), effets, claviers, matériel vintage et de sonorisation :</h4>
            <ul>
              <li>- Révisions</li>
              <li>- Réparations</li>
              <li>- Modifications</li>
              <li>- Conseils</li>
              <li>- Optimisation</li>
            </ul>
          </div>
            
          <div className={styles.imageContainer}>
            <Image 
            src={serviceImg} 
            alt="Reparation ampli à lampe"
            layout="fill"
            objectFit="contain"
          />
          </div>
        </article>
        <article className={[styles.imageOnLeft, styles.homeArticle].join(' ')}>
          <div className={styles.textContainer}>
            <h3>Nos Compétences</h3>
            <h4>Connaissances approfondies sur : </h4>
            <h4>Marshall, Fender, Hiwatt, Vox, Orange, Laney, H.K, Mesa-boogie, Boss, Roland, E.H, Peavey, T-REX...</h4>
            <p>Optimisation des amplis à chaque retubage en sélectionnant les tubes en fonction de votre style de musique !</p>
            <p>Appairage des tubes au lampe-mètre.</p>
          </div>
          <div className={styles.imageContainer}>
            <Image 
              src={expertiseImg}
              alt="Ampli Nantes"
              layout="fill"
              objectFit="contain"
              className="image"
            />
          </div>
        </article>
        <article className={[styles.imageOnRight, styles.homeArticle].join(' ')}>
          <div className={styles.textContainer}>
            <h3>Nos engagements</h3>
            <p className={styles.subTitle}>{"L'atelier s'engage à :"}</p>
            <ul>
              <li>- Vous proposer des <strong>devis gratuits</strong>  !</li>
              <li>- Vous proposer un <strong>tarif horaire compétitif et adapté</strong> {`(${price}€/h ttc et fractionnable en quarts d'heure)`}</li>
              <li>- Travailler en toute clarté (respect des tarifs, retour des pièces défectueuses, ...)</li>
              <li>- Garantir des délais respectables (urgence prise en compte)</li>
              <li>- Vous informer sur le suivi des interventions (mail ou tel)</li>
              <li>- Vous proposer un service de qualité et <strong>sous garantie pendant 3 mois</strong></li>
              <li>- Rester disponible et à votre écoute (même hors garantie)</li>
              <li>- Vous conseiller au mieux et dans votre intérêt.</li>
              <li>- Optimiser vos amplis à tubes en tenant compte de votre style musical.</li>
              <li>- Si besoin installer les tubes, ou composants, que vous fournirez.</li>
              <li>- Et surtout, <strong>fiabiliser et faire sonner au mieux vos amplis !</strong></li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
          <Image 
              src={commimentsImg}
              alt="Revision ampli"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default Home
