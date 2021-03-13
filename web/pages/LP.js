import Button from "../components/Button";
import MetrixCard from "../components/MetrixCard";
import styles from "../styles/LP.module.css";   
import Link from 'next/link';

export default function LP(){
    return (
        <>
            <div className={styles.headerAndHero}>
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
                        <Link href="/download">
                            <Button isOutline={false} text="Baixe agora"></Button>
                        </Link>
                    </div>
                    <img src="/images/lpHeroImg.svg" alt="Big bee" className={styles.heroImg}></img>
                </div>
            </div>
            <div className={styles.metrixSection}>
                <MetrixCard data={{number: "150", 
                                sizeUnit: "Milhões", 
                                text: "Problemas solucionados por nossas abelhas"}}>
                </MetrixCard>
                <MetrixCard data={{number: "140", 
                                sizeUnit: "Mil", 
                                text: "De abelhas enriquecendo a cada dia"}}>
                </MetrixCard>
                <MetrixCard data={{number: "300", 
                                sizeUnit: "Reais", 
                                text: "Em movimento a cada minuto em nossa colmeia"}}>
                </MetrixCard>
            </div>
        </>
    );
}