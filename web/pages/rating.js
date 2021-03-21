import styles from '../styles/Rating.module.css'
import Button from '../components/Button'

export default function Rating(){
        return(
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.logo}>
                        <img src="/images/ratingLogo.svg" alt="beeco" />
                    </div>
                    
                    <img src="/images/freelancer.jpg" alt="freelancer" /> 

                    <p>Como foi sua experiencia com Guatura?</p>

                    <div className={styles.stars}>
                        <img src="/images/enabledStar.svg" alt="star" className={styles.star}/>
                        <img src="/images/enabledStar.svg" alt="star" className={styles.star}/>
                        <img src="/images/enabledStar.svg" alt="star" className={styles.star}/>
                        <img src="/images/enabledStar.svg" alt="star" className={styles.star}/>
                        <img src="/images/enabledStar.svg" alt="star" className={styles.star}/>
                    </div>

                    <Button isOutline={false} text="Confirmar"></Button>
                </div>
            </div>
        )
}