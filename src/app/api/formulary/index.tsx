"use client"
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { useState,FormEvent } from "react";

import { db } from "../../../../lib/firebase";
import { addDoc, collection } from 'firebase/firestore';

import styles from './styles.module.scss'



interface contactsProps{
    name:string;
    email:string;
    phone:string;
}


export function Formulary(){
     const [loading, setLoading] = useState<boolean>(false);
        
        const [name,setName] = useState('')   
        const [phone, setPhone] = useState('')
        const [email,setEmail] = useState('')
    


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
            toast.success('Your data has been sent successfuly, please wait for contact today!')
           
        }catch(error){
            console.error(error)
            toast.error('An error ocurred, please try again or call us!')
        }
    
        setLoading(false)
}

 return(
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

            <button type='submit' className={styles.button} disabled={loading}>
            {loading ? (
                <span className={styles.loader}></span>
            ) : ( <strong className={styles.textButton}>Submit</strong> 
             )}
            </button>
            </div>
        </form>
        )

}