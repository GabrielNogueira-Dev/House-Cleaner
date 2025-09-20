"use client"

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import  Link from "next/link"


export function Header(){
    const [top, setTop] = useState(true)

    const scrolHandler = () =>{
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    useEffect(()=>{

        window.addEventListener("scroll", scrolHandler)
            //garantir que sera desmontado pra n ficar renderizando
        return () => window.removeEventListener("scroll", scrolHandler)

    },[top])


    return(
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
          
          <div className= {styles.container}>

            <div className={styles.content}>

                <div className={styles.contentLogo}>
                    <Link href="/">
                      Mrs. Cleaning
                    </Link><strong>🧹</strong>
                </div>

                <nav className={styles.nav}>
                    <Link href="/">
                    Home
                    </Link>
                    <Link href="/#servicos">
                    Services
                    </Link>
                    <Link href="/#contatos">
                    Contacts
                    </Link>
                </nav>

            </div>
           </div>
        </header>
    )
}