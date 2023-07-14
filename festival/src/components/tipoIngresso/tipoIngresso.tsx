import { IngressosProps } from "@/interfaces/interfaces";
import styles from './tipoIngresso.module.css';
import axios from 'axios';
import { useRouter } from "next/router";
import { useState } from "react";
import { User } from "@prisma/client";

function TipoIngresso(props:IngressosProps){
    const router = useRouter();
    const [userInfo, setUserInfo] = useState<User>();
    const vendeIngresso = async () => {
        try{
            try{
                const User = await axios.get("http://localhost:3000/api/user");
                setUserInfo(User.data)
            }catch{
                router.push("/login");
            }
            if (userInfo){
                const ingresso = await axios.post('http://localhost:3000/api/ticket', {
                idTipo: props.TipoIngresso.idTipo,
                idUser: userInfo.idUser,
                });
                return ingresso
            }
            
            
        }catch(error){
            if(error instanceof Error){
                console.log(error.message);
            }
        
        }
    }

    return(
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
            {props.TipoIngresso.descricao? <h2> {props.TipoIngresso.descricao.toUpperCase()} <span>{props.TipoIngresso.descricao.toUpperCase()} </span>{props.TipoIngresso.descricao.toUpperCase()}</h2>: "Carregando..."}
                <div className={styles.Content}>
                    <div className={styles.Description}>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                        <p className={styles.mainContent}>_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso</p>
                    </div>
                    <div className={styles.Price}>
                        <h2>R${props.TipoIngresso.preco.toFixed(2)}</h2>
                        <p>Ou 10x de  <strong> R${(props.TipoIngresso.preco/10).toFixed(2)}</strong></p>
                    </div>
                </div>
                <button className={styles.Button} onClick={vendeIngresso}>COMPRAR INGRESSO {props.TipoIngresso.descricao? props.TipoIngresso.descricao.toUpperCase(): "Carregando()"}</button>
            </div>
        </div>
    );
}
export default TipoIngresso;
