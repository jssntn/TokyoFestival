import { IngressosProps } from "@/interfaces/interfaces";
import styles from './tipoIngresso.module.css';
import axios from 'axios';





function TipoIngresso(props:IngressosProps){

    const axios = require('axios').default;

    const vendeIngresso = async () => {
        try{
            const ingresso = await axios.post('http://localhost:3000/ticket', {params:{
            idTipo: props.TipoIngresso.idTipo,
            idUser: props.User.idUser
        }});
            return ingresso
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                <h2>{props.TipoIngresso.descricao.toUpperCase()}<span>{props.TipoIngresso.descricao.toUpperCase()}</span>{props.TipoIngresso.descricao.toUpperCase()}</h2>
                <div className={styles.Content}>
                    <div className={styles.Description}>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                        <p className={styles.mainContent}>_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso</p>
                    </div>
                    <div className={styles.Price}>
                        <h2>R${props.TipoIngresso.preco.toFixed(2)}</h2>
                    </div>
                </div>
                <button className={styles.Button} onClick={vendeIngresso}>COMPRAR INGRESSO {props.TipoIngresso.descricao.toLocaleUpperCase()}</button>
            </div>
        </div>
    );
}
export default TipoIngresso;
