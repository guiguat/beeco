import styles from '../../styles/MetrixCard.module.css'

export default function({number, sizeUnit, text}){
    return(
        <div className = {styles.metrixCard}>
            <h1 className = {styles.number}>{number}</h1>
            <div className={styles.subtitle}>
                <p className = {styles.sizeUnit}>{sizeUnit}</p>
                <p className = {styles.text}>{text}</p>
            </div>
        </div>
    );
}