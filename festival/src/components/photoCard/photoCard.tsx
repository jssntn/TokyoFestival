import styles from './photoCard.module.css'
import Image from 'next/image'
import { CardProps } from "@/interfaces/interfaces";


function PhotoCard(props:CardProps){
    return(
        <>
            <div className={styles.photoBox}>
                <Image src={props.caminho} alt='Imagem do artista' width={376} height={556}/>
                <div className={styles.nomePhotoBox}>
                    <h2>{props.nome}</h2>
                </div>
            </div>
        </>
        )
}

export default PhotoCard;
