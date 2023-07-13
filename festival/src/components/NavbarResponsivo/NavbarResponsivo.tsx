import Link from 'next/link'
import styles from './NavbarResponsivo.module.css'
import { useState } from 'react'


interface navbarProps{
    largura:number
}

export default function NavbarResponsivo(props:navbarProps) {

    const [openedModal, setOpenedModal] = useState<boolean>(false);

    const openModal = () => {
        setOpenedModal(true);
    }

    const closeModal = () => {
        setOpenedModal(false);
    }

    return (
        <>
            <header style={{width:props.largura}} className={styles.navbarBox}>
                <div className={styles.flexboxHeader}>
                    <h1>東京都</h1>
                    <div>
                        <button className={styles.botaoDeAbrirMenu} onClick={openModal}>&#9776;</button>
                    </div>
                </div>
                {
                openedModal 
                && 
                <div className={styles.modalFullScreen}>
                    <div className={styles.closeButton} onClick={closeModal}>&#10006;</div>
                    <nav>
                        <ul>
                            <li><Link href='/' legacyBehavior><a>Início</a></Link></li>
                            <li><Link href='/atracoes' legacyBehavior><a>Atrações</a></Link></li>
                            <li><Link href='/ingressos' legacyBehavior><a>Ingressos</a></Link></li>
                            <li><Link href='/cadastro' legacyBehavior><a>Cadastro</a></Link></li>
                            <li><Link href='/login' legacyBehavior><a>Login</a></Link></li>
                        </ul>
                    </nav>
                </div>
                    }
            </header>
        </>
    )
}