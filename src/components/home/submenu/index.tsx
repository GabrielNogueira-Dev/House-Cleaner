"use client"
import styles from "./styles.module.scss"
import Link from "next/link"

import { X, Menu } from "lucide-react"
import { useEffect, useState } from "react"

export function Submenu(){

    const [burguer,setBurguer] = useState(false)

    useEffect(()=>{
        const handleResize = ()=> {
            if(window.innerWidth > 768){
                setBurguer(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize",handleResize)

    },[])

    function toggleMenu(){
        setBurguer(!burguer)
    }

    return(
       <section className={styles.submenu}>
            <div className={styles.submenuIcon} onClick={toggleMenu}>
                <Menu size={34} color="black"/> Menu
            </div>

        <ul className={`${styles.ul} ${burguer ? styles.open : ""}`}>

            {burguer && (
                <button onClick={toggleMenu} className={styles.classButton} >
                  <X size={44} color="grey"/>
                  
                </button>
            )}

            <li>
                <Link href="/post/pagina-1">
                Page 1
                </Link>
            </li>
            <li>
                <Link href="/post/pagina-2">
                Page 2
                </Link>
            </li>
        </ul>
       </section>
    )
}