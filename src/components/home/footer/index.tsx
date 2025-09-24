
import { FaLinkedin } from "react-icons/fa"
import styles from "./styles.module.scss"


export function Footer(){

    return(
          <section className={styles.containergeral}>
      
    <div className={styles.grupo}>

             <div className={styles.containercop}>

                     <strong className={styles.cop}>©Copyright 2023 Mrs Cleaning - All Rights Reserved</strong>

            </div>

                    <div>
                        <span className={styles.att}>Updated recently for improved performance and security </span>
                    </div>

             <div className={styles.containerby}>

                <strong><a
                href="https://www.linkedin.com/in/gabriel-nogueira-2944b5335/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.by}
                style={{color:"white", textDecoration:"none"}}
                 >
                Created by gabriel-nogueira <FaLinkedin style={{ marginLeft: '6px' }} />
            </a></strong>

              </div>

    </div>
     
     </section> 
    )
}