"use client"

import { HomeProps } from '@/utils/home.type'
import styles from './styles.module.scss'
import Image from 'next/image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

export function Services({object}:HomeProps){
        const router = useRouter()

    const [ismobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
  // Função que verifica o tamanho da tela pra adionar meu carousel(slide)
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640)
  }
  handleResize()

  // Adiciona um ouvinte que escuta quando a tela é redimensionada
  window.addEventListener("resize", handleResize)

  return () => window.removeEventListener("resize", handleResize)
}, []) 

        const carouselImg = { //isso é o slide e suas funções
             dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000  
        }

        function generateSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "") // remove diacríticos
    .replace(/[^\w\s-]/g, "") // remove emojis e símbolos
    .trim()
    .replace(/\s+/g, "-") // troca espaços por hífen
}


    return(
        <>
        <section className={styles.containerAbout} id= "services">
           <article className={styles.innerAbout}>
            <h1 className={styles.title}>🧼 About  </h1>
            <p>{object.metadata.about.description}</p>
           </article>

            <div className={styles.bannerAbout}>
                <Image className={styles.imageAbout}
                    alt='Imagem da empresa'
                    quality={100}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    src={object.metadata.about.banner.url}
                />
            </div>

        </section>

        <h2 className={styles.servicesTitle}>Meeting our services</h2>

        <section className={styles.services}>
        
           {ismobile ? (object.metadata.services.map(services => (
                <article key={services.description} className={styles.service}>
                   <div className={styles.innerService} onClick={()=> {
                    const slug = generateSlug(services.description)
                    router.push(`/post/${slug}`)
                   }}>
                     <Image className={styles.imageService}
                    alt='Imagem do servico'
                    quality={100}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={services.image.url}
                />
                   </div>
                   <p>{services.description}</p>
                </article>
            )))
        : <Slider {...carouselImg} className={styles.carouselImg}>
            
             {object.metadata.services.map(services => (
                <article key={services.description} className={styles.service}>
                   <div className={styles.innerService} onClick={()=> {
                    const slug = generateSlug(services.description)
                    router.push(`/post/${slug}`)
                   }}>
                     <Image className={styles.imageService}
                    alt='Imagem do servico'
                    quality={100}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    src={services.image.url}
                />
                   </div>
                   <p>{services.description} </p>
                </article>
            ))}

        </Slider>}
       
        </section>
        </> 
    )
}