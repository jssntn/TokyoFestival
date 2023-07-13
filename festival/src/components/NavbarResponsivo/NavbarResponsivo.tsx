import Link from 'next/link'
import styles from './NavbarResponsivo.module.css'
import { useState } from 'react'



export default function NavbarResponsivo() {

    const [openedModal, setOpenedModal] = useState<boolean>(false);

    const openModal = () => {
        setOpenedModal(true);
    }

    const closeModal = () => {
        setOpenedModal(false);
    }

    return (
        <>
            <header className={styles.navbarBox}>
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
                    <Link href='/' legacyBehavior><a>Início</a></Link>
                    <Link href='/atracoes' legacyBehavior><a>Atrações</a></Link>
                    <Link href='/ingressos' legacyBehavior><a>Ingressos</a></Link>
                    <Link href='/cadastro' legacyBehavior><a>Cadastro</a></Link>
                    <Link href='/login' legacyBehavior><a>Login</a></Link>
                </div>
                    }
            </header>
        </>
    )
}