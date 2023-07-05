
"use client"
import Navbar from "@/components/navbar/navbar"
import styles from '@/styles/Ingressos.module.css'
import TipoIngresso from "@/components/tipoIngresso/tipoIngresso"
import Footer from "@/components/footer/footer"
import { iTipoIngresso, User } from "@/interfaces/interfaces"
import { Tipo } from "@prisma/client"
import { useState, useEffect } from "react"
import axios from "axios"



export default function Ingressos(){
    const Julia = {
        idUser: 1,
        name: "Julia",
        age: 21,
        email: "emailteste",
      };

    const axios = require('axios').default;

    const [tipo, setTipo] = useState<iTipoIngresso[]>([]);
    const [User, setUser] = useState<User>(Julia);

    const fetchTipoIngresso = async () => { 
        const response = await axios.get('http://localhost:3000/api/ticket');
        const tipos = response.data.map((tipo:Tipo)=>{
            return {
            idTipo: tipo.idTipo,
            descricao: tipo.nome,
            preco: tipo.preco} as iTipoIngresso
        })
        setTipo(tipos);
        
    }

    useEffect(() => { 
        fetchTipoIngresso();
    });
    return ( 
    <>
    <Navbar></Navbar>
    <section className = {styles.cards}>
        {
            tipo.map((tipo) => {
                return <TipoIngresso User={User as User} TipoIngresso={tipo as iTipoIngresso}></TipoIngresso>
            })
        }
    </section>
    <Footer/>
    </>
    
    )
}