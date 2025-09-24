
import styles from "./styles.module.scss"

import { Formulary } from "../api/formulary";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House Cleaner-Discount",
  description: "discount for first customer",
};

export default function Discount(){

    return(
       <section className={styles.section}>
                    
                    <div className={styles.broomWrapper}>
             <img src="/broom.gif.gif" alt="Vassoura varrendo" className={styles.broom} />
                    </div>

            <div className={styles.divTitle}>
                
            <h1 className={styles.title}>New here? Start saving — your welcome discount is already guaranteed.</h1>

            </div>

        <main className={styles.container}>

           <nav className={styles.nav}>

            <div className={styles.fristDiv}>
                <p>Experience the difference of a professionally cleaned home today! Contact us now to schedule your cleaning services. Our friendly and knowledgeable staff is ready to answer any questions you may have and help you choose the perfect cleaning package for your needs. Let Mrs. Cleaning Service bring the sparkle back to your home!</p>
            </div>

            <div className= {styles.secondDiv}>
                <p>If you are looking for professional and reliable cleaning services, look no further than Mrs. Cleaning Services. We are here to make your space shine and provide you with a clean and healthy environment. Contact us today to schedule your cleaning service and experience the difference that our expertise and dedication can make in your space.</p>
            </div>

           </nav>

        </main>

        <Formulary/>

       </section>
    )
}