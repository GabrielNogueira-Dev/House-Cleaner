"use client"
import { addDoc,collection } from 'firebase/firestore'
import styles from './styles.module.scss'

import { FormEvent, useState } from 'react'
import { db } from '../../../lib/firebase'
import { useRouter } from 'next/navigation'

export interface ContactProps{
name:string;
text:string;
star:number;
}

export default function Avaliation(){

        const [loading,setLoading] = useState<boolean>(false)
        const router = useRouter()

    const [name,setName] = useState("")
    const [text,setText] = useState("")
    const [star,setStar] = useState<number>(5)
    
    async function handleSubmit(e:FormEvent){
    e.preventDefault()
    setLoading(true)
    setName("")
    setText("")
    setStar(5) 

    const avaliacao:ContactProps = {name,text,star} 
    
       try{
        await addDoc(collection(db,"avaliations"),{
            ...avaliacao,
            timestamp: new Date()
        })
        router.push("/")
       }catch(err){
        throw new Error("Failed to fetch")
    }  
        setLoading(false)
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.section}>
                <h1 className={styles.title}>Your avaliation is great for us, Thank you!</h1>
               <section className={styles.inputs}>

                 <input type="text" placeholder='Your name and Surname' required className={styles.captalize}
                    value={name} onChange={(e) => setName(e.target.value)}
                 />
                <textarea  maxLength={110} className={styles.textarea} placeholder='Your feedback' required
                    value={text} onChange={(e) => setText(e.target.value) }
                />

                <select name="stars" className={styles.stars} required
                    value={star.toString()} onChange={(e) => setStar(Number(e.target.value))}
                >

                <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
                <option value="4">⭐️⭐️⭐️⭐️</option>
                <option value="3">⭐️⭐️⭐️</option>
                <option value="2">⭐️⭐️</option>
                <option value="1">⭐️</option>

                </select>

               </section>
                {loading ? (<button className={styles.sub} type="submit"> THANK YOU 💞 </button>) : (<button className={styles.sub} type="submit"> Submit </button>)}
            </div>

        </form>
    )
}