import styles from '../../styles/Rating.module.css'
import Button from '../../components/Button'
import Star from '../../components/RatingStar'
import { useState } from 'react'
import api from '../../services/api'

export async function getServerSideProps(context) {
    const { id } = context.query
    try {
        const {data: user} = await api.get(`/users/${id}`);
        console.log(user)
        return {
            props: { user }, // will be passed to the page component as props
        }
    } catch (error) {
        return {
            props: { error: "Usuário não encontrado" }
        }
    }
  }

export default function Rating({user, error}){
        const [avaliacao, setAvaliacao] = useState(0)
        const [avaliado, setAvaliado] = useState(false)
        const [rate, setRate] = useState(null)
        const handleConfirm = async () => {
            if(avaliacao > 0){
               await api.patch(`/users/rating/${user.id}?stars=${rate}`)
               setAvaliado(true)
            }
        }
        if(error) return <h1>{error}</h1>
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
                                <img src={user.photo} alt="freelancer" className={styles.photo}/> 
                            </div>
                            <p>Como foi sua experiencia com {user.firstName}?</p>
                            <div className={styles.stars} onClick={()=>setAvaliacao(3)}>
                                <Star updateRate={setRate} rating={rate}/>
                            </div>
                            <Button isOutline={false} disabled={avaliacao===0} 
                            text="Confirmar" onClick={handleConfirm}></Button></>):(
                            <>
                            <div className={styles.freelancerGreen}>
                                <img src={user.photo} alt="freelancer" className={styles.photo}/>  
                                <img src="/images/check.svg" alt="check" className={styles.checked}/>  
                            </div>
                            <label className={styles.thanks}>Obrigado pela sua avaliação</label>
                        </>)}
                    </div>
                </div>
            </div>
        )
}