import styles from '../styles/Rating.module.css'
import Button from '../components/Button'
import Star from '../components/RatingStar'
import { useState } from 'react'

export default function Rating(){
        const [avaliacao, setAvaliacao] = useState(0)
        const [avaliado, setAvaliado] = useState(false)
        const [rate, setRate] = useState(null)
        return(
            <div className="container">
                <div className={styles.wrapper}>
                    <img src="/images/hive.svg" alt="" className={styles.topHive}/>
                    <img src="/images/hive.svg" alt="" className={styles.bottomHive}/>

                    <div className={styles.logo}>
                        <img src="/images/ratingLogo.svg" alt="beeco" />
                    </div>
                    <div className={styles.content}>
                        {!avaliado? ( <> 
                            <div className={styles.freelancer}>
                                <img src="/images/freelancer.jpg" alt="freelancer" className={styles.photo}/> 
                            </div>
                            <p>Como foi sua experiencia com Guatura?</p>
                            <div className={styles.stars} onClick={()=>setAvaliacao(3)}>
                                <Star updateRate={setRate} rating={rate}/>
                                
                            </div>
                            <Button isOutline={false} disabled={avaliacao===0} text="Confirmar" onClick={()=>avaliacao>0? setAvaliado(true):null}></Button></>):(
                            <>
                            <div className={styles.freelancerGreen}>
                                <img src="/images/freelancer.jpg" alt="freelancer" className={styles.photo}/>  
                                <img src="/images/check.svg" alt="check" className={styles.checked}/>  
                            </div>
                            <label className={styles.thanks}>Obrigado pela sua avaliação</label>
                        </>)}
                    </div>
                </div>
            </div>
        )
}