
import { HomeProps } from "@/utils/home.type"
import styles from "./styles.module.scss"
import { Clock, Mail, Phone, } from "lucide-react"
import { FeedbackShow } from "@/app/feedback"

export function Contacts({object}: HomeProps){

    return(
        <>
            <FeedbackShow/>
        <footer id="contacts" className={styles.footer}>
            <section className={styles.section}>
                <h2 className={styles.title}>Contacts</h2>

                <div className={styles.content}>

                    <div className={styles.item}>
                       <Mail size={28} color="black"/>
                       <div>
                        <strong>Email</strong>
                        <p>{object.metadata.contact.email}</p>
                       </div>
                    </div>

                     <div className={styles.item}>
                       <Phone size={28} color="black"/>
                       <div>
                        <strong>Phone</strong>
                        <p>{object.metadata.contact.phone}</p>
                       </div>
                    </div>

                     <div className={styles.item}>
                       <Clock size={28} color="black"/>
                       <div>
                        <strong>Time</strong>
                        <p>{object.metadata.contact.time}</p>
                       </div>
                    </div>

                </div>

            </section>
                 
        </footer>
</>
)
}