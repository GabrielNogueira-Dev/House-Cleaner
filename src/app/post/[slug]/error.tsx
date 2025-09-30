"use client"
import Link from "next/link";
import styles from "./error.module.scss"

export default function Error(){

    return(
        <div className={styles.error}>
            <h1>Opss. Página não encontrada!</h1>
            <Link href="/">Voltar para Home.</Link>
        </div>
    )

}