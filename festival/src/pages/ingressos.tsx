
import Navbar from "@/components/navbar/navbar"
import styles from '@/styles/Ingressos.module.css'
import TipoIngresso from "@/components/tipoIngresso/tipoIngresso"
import { Tipo } from "@prisma/client"
import { useState } from "react"
export default function Ingressos(){
    const [tipo, setTipo] = useState();
    return ( 
    <>
    <Navbar></Navbar>
    <h1> Coming soon</h1>
    </>
    
    )
}