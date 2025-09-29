"use client"
import styles from "./styles.module.scss"
import Link from "next/link"

import { X, Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { MenuProps } from "@/utils/menu.type"

interface SubMenuProps{
    menu:MenuProps
}

export function Submenu({ menu }:SubMenuProps){

    const [burguer,setBurguer] = useState(false)
console.log(menu)
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

               {menu.objects.map( item => (
           
             <li key={item.slug}>
                 <Link href={`/post/${item.slug}`}>
                    {item.title}
                </Link>
            </li>

               ))}
        </ul>
       </section>
    )
}