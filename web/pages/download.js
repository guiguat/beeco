import styles from '../styles/download.module.css'
import Button from '../components/Button'
import Router from 'next/router'

export default function Download(){
    return(
        <div className={styles.container}>
            <div className={styles.div1}>
                <img src="/images/logoDownload.svg" alt="beeco"/>
                <p>Bee.co é a plataforma para os trabalhadores do futuro, entre na nossa colmeia e solucione os problemas mais abelhudos de milhões de usuarios. Se você precisa de uma abelha para te ajudar baixe agora e cadastre sua oferta de trabalho.</p>
                <Button onClick={()=>{Router.push('/')}} isOutline={false} text="Voltar"></Button>
            </div>
            <div className={styles.div2}>
                <div className={styles.download}>
                    <p className={styles.title}>Desktop</p>
                    <label className={styles.description}>Crie ofertas de trabalho e procure por trabalhos disponiveis.</label>
                    <Button isOutline={true} text="Baixar"></Button>
                </div>
                <div className={styles.download}>
                    <p className={styles.title}>Android</p>
                    <label className={styles.description}>Procure por trabalhos disponiveis e torne-se uma abelha de sucesso.</label>
                    <Button isOutline={true} text="Baixar"></Button>
                </div>
                <div className={styles.download}>
                    <p className={styles.title}>IOS</p>
                    <label className={styles.description}>Procure por trabalhos disponiveis e torne-se uma abelha de sucesso.</label>
                    <Button isOutline={true} text="Baixar"></Button>
                </div>
            </div>
        </div>
        
    );
}