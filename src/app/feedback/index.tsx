"use client"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../lib/firebase"
import { useEffect,useState } from "react"
import styles from './styles.module.scss'

import Slider from "react-slick"

interface feedbacks{
    id:string;
    name:string;
    text:string;
    star:number;
    timestamp?:Date;
}


export function FeedbackShow(){

    const [feedbackShow,setFeedbackShow] = useState<feedbacks[]>([])
    const [loading,setLoading] = useState<boolean>(true)
    
    useEffect(()=>{

       async function fetchData(){

         try{
            const querySnapshot = await getDocs(collection(db,"avaliations"))
            const data = querySnapshot.docs.map( doc=> ({
                id: doc.id,
                ...doc.data()
            }) ) as feedbacks[]
                setFeedbackShow(data)
                
        }catch(err){
            throw new Error("Failed to find")
        }finally {
        setLoading(false)
      }
 

       }
fetchData()
    },[])

             const carouselImg = {
                     dots: false,
                      infinite: true,
                       speed: 500,
                        slidesToShow: 3,
                         slidesToScroll: 1,
                          autoplay: true,
                           autoplaySpeed: 3000,
                             responsive:[
                                {
                                    breakpoint:1025,
                                     settings: {
                                      slidesToShow:2
                                    }
                                },
                                 {
                                    breakpoint:480,
                                     settings: {
                                        slidesToShow:2
                                     }
                                 }
                             ]
                                                  }

    
    return(
        <>
        <div className={styles.father}>
        <strong className={styles.title}>Avaliations <p>👇🏼</p></strong>
        <Slider {...carouselImg} className={styles.carouselImg}>
    
        {feedbackShow.length >0 && (
            feedbackShow.map(item => (
                <section key={item.id} className={styles.containerFeed}>
               
                        <h3>{item.name}</h3>
                    <p>{item.text}</p>

              <div className={styles.starDisplay}>
            {/* Cria um container para exibir as estrelas. A classe 'starDisplay' pode aplicar estilos como alinhamento, cor, espaçamento etc. */}

            {Array.from({ length: item.star }).map((_, i) => (
                // Cria um array com o número de posições igual ao valor de 'item.star'
                // Exemplo: se item.star === 4, gera [undefined, undefined, undefined, undefined]

                <span key={i}>⭐️</span>
                // Para cada posição do array, renderiza um ícone de estrela
                // Usa 'key={i}' para garantir que cada elemento seja único no DOM (boa prática em listas)
            ))}
             </div>
             
                </section>
            ))
        )}

       </Slider>
       </div>
      </>
    )

}