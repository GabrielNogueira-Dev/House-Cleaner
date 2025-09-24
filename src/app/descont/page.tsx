"use client"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { FormEvent } from 'react';
import styles from "./styles.module.scss"
import { useState } from 'react';

import { db } from '../../../lib/firebase';
import { addDoc, collection } from 'firebase/firestore';

interface contactsProps{
    name:string;
    email:string;
    phone:string;
}

export default function Descont(){

    const [loading, setLoading] = useState<boolean>(false);
    
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone, setPhone] = useState('');


async function handleSubmit(e:FormEvent) {
  e.preventDefault(); 
  setLoading(true);

    const contacts: contactsProps = {name,email,phone}

    try{ //salvar os contatos
        await addDoc(collection(db,"contacts"),{
            ...contacts,
            timestamp: new Date()
        });

        //Enviar por email para o cliente do site
        await fetch('/api/send-lead',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contacts),
        });

        //Reset all input
        setName('')
        setEmail('')
        setPhone('')
        alert('Your data has been sent successfuly, please wait for contact today!')
       
    }catch(error){
        console.error(error)
        alert('An error ocurred, please try again or call us!')
    }

    setLoading(false)
}


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

        <form className={styles.formContainer}
         onSubmit={handleSubmit}
        >

            <div className={styles.inputContainer}>

                <input type="text" placeholder="Your Name" value={name} onChange={ (e)=> setName(e.target.value)} required/>
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <PhoneInput
            country={'us'} // Portugal como padrão
            value={phone}
            onChange={(value) => setPhone(value)}
            preferredCountries={['pt', 'br', 'us']}
            inputProps={{
              name: 'phone',
              required: true,
              placeholder: 'Phone Number',
            }}
            containerClass={styles.phoneContainer}
            inputClass={styles.phoneInput}
          />

            <button className={styles.button} disabled={loading}>
            {loading ? (
                <span className={styles.loader}></span>
            ) : ( <strong className={styles.textButton}>Submit</strong> 
             )}
            </button>
            </div>

        </form>

       </section>
    )
}