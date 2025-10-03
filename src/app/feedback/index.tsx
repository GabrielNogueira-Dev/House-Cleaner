"use client"
import { useEffect, useState, useLayoutEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../lib/firebase"
import Slider from "react-slick"
import styles from './styles.module.scss'

interface feedbacks {
  id: string;
  name: string;
  text: string;
  star: number;
  timestamp?: Date;
}

export function FeedbackShow() {
  const [feedbackShow, setFeedbackShow] = useState<feedbacks[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [slidesToShow, setSlidesToShow] = useState<number | null>(null)

  // Detecta largura da tela antes do primeiro paint
  useLayoutEffect(() => {
    const width = window.innerWidth
    if (width <= 640) setSlidesToShow(1)
    else if (width <= 1050) setSlidesToShow(2)
    else setSlidesToShow(3)
  }, [])

  // Atualiza dinamicamente ao redimensionar
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      if (width <= 640) setSlidesToShow(1)
      else if (width <= 1050) setSlidesToShow(2)
      else setSlidesToShow(3)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Busca dados do Firebase
  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "avaliations"))
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as feedbacks[]
        setFeedbackShow(data)
      } catch (err) {
        throw new Error("Failed to find")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Configuração do carousel com slides dinâmicos
  const carouselImg = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: slidesToShow ?? 1
  }

  return (
    <div className={styles.father}>
      <strong className={styles.title}>Avaliations <p>👇🏼</p></strong>

      {!loading && feedbackShow.length > 0 && slidesToShow !== null && (
        <Slider key={slidesToShow} {...carouselImg} className={styles.carouselImg}>
          {feedbackShow.map(item => (
            <section key={item.id} className={styles.containerFeed}>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <div className={styles.starDisplay}>
                {Array.from({ length: item.star }).map((_, i) => (
                  <span key={i}>⭐️</span>
                ))}
              </div>
            </section>
          ))}
        </Slider>
      )}
    </div>
  )
}
