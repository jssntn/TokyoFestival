import Image from "next/image";
import { HomeIngressoProps } from "@/interfaces/interfaces";
import styles from './homeIngressoCard.module.css'


function HomeIngressoCard(props:HomeIngressoProps){
    return(
        <>
            <div className={styles.ingressoCardBox} >
                <h1 style={{color:'#F5F5F5',fontSize:'2rem'}}>{props.tipo}</h1>
                <p>
                Lorem ipsum lorem
                ipsum lorem ipsum
                </p>
                <p>
                _Acesso a isso
                _Acesso a aquilo
                _Acesso a área tal
                _Kit de boas vindas
                </p>
                <h2>R$ {props.preco}</h2>
            </div>
        </>
    )
}

export default HomeIngressoCard