import styles from '../../styles/Button.module.css' 

export default function Button({text, isOutline, ...rest}){
    return(
        <button className={ `${styles.button} ${isOutline?styles.buttonOutline: null}`} {...rest}> 
            <p className={styles.text}>
                {text} 
            </p>
        </button>
    );
}