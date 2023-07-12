import styles from './photoCard.module.css'
import Image from 'next/image'
import { CardProps } from "@/interfaces/interfaces";


function PhotoCard(props:CardProps){
    return(
        <>
            <div className={styles.photoBox}>
                <div className={styles.nomePhotoBox1}>
                    <div className={styles.nome1PAbsoluteBox}>
                        {props.tipo && <h2>{props.nome}</h2>}
                    </div>
                </div>
                <Image src={props.caminho} alt='Imagem do artista' width={250} height={350}/>
                <div className={styles.nomePhotoBox2}>
                    {!props.tipo && <h2>{props.nome}</h2>}
                </div>
            </div>
        </>
        )
}

export default PhotoCard;
