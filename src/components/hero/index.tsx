import styles from "./styles.module.scss"
import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
   heading:string;
   buttonUrl:string;
   buttonTitle:string;
   bannerUrl:string;
   icon:ReactNode;
}

export function Hero({heading,bannerUrl,buttonTitle,buttonUrl,icon}:HeroProps){

    return(
        <main className={styles.main}>
          <div className={styles.containerHero}>
            <h1 className={styles.title}>{heading}</h1>

            <a href={buttonUrl}
                target="_blank"
                className={styles.link} 
            >
             {buttonTitle}  {icon}
            </a>
         </div>
        <div className={styles.contentBanner}>
            <Image
            alt={heading}
            src={bannerUrl}
            priority={true}
            quality={100}
            fill={true}
            className={styles.banner}
          /> 
        </div>
        </main>
    )
}