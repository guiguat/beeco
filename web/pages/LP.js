import Button from "../components/Button";
import styles from "../styles/LP.module.css";   

export default function LP(){
    return (
        <div className={styles.container}>
            <header>
                <img src="/images/lpLogo.svg" alt="beeco"/>
            </header>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Entre para nossa colmeia
                    </h1>
                    <p className={styles.heroText}>
                        Bee.co é a plataforma para os trabalhadores do futuro, entre na nossa colmeia e solucione os problemas mais abelhudos de milhões de usuarios. Se você precisa de uma abelha para te ajudar baixe agora e cadastre sua oferta de trabalho.
                    </p>
                    <Button isOutline={false} text="Baixe agora"></Button>
                </div>
                <img src="/images/lpHeroImg.svg" alt="Big bee" className={styles.heroImg}></img>
            </div>
        </div>
    );
}