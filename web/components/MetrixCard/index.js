import styles from '../../styles/MetrixCard.module.css'

export default function MetrixCard({data, extraClass}){
    return(
        <div className = {`${styles.metrixCard} ${extraClass}`}>
            <h1 className = {styles.number}>{data.number}</h1>
            <div className={styles.subtitle}>
                <p className = {styles.sizeUnit}>{data.sizeUnit}</p>
                <p className = {styles.text}>{data.text}</p>
            </div>
        </div>
    );
}