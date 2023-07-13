import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import styles from '@/styles/Cadastro.module.css'
import img from '../../public/img/cadastroImg.svg'
import logo from '../../public/img/logoCadastro.svg'
import Image from 'next/image'
import Link from 'next/link';
import NavbarResponsivo from '@/components/navbarResponsivo/NavbarResponsivo'

const inter = Inter({ subsets: ['latin'] })

export default function Cadastro() {
    return(
    <>
        <div className={styles.navbarDesktop}><Navbar/></div>
        {( // RESPONSIVO
            <div className={styles.navbarResponsivo}><NavbarResponsivo largura={700} /></div> 
        )}
        <div className={styles.Wrapper}>
            
            <div className={styles.Container}>
                <div className={styles.imgs}>
                <Image src={img} alt="Imagem" className={styles.Img} />
                <Image src={logo} alt="Imagem" className={styles.imgLogo} />
                </div>
                {(
                    // RESPONSIVO
                    <div className={styles.imgResponsivoBox}>
                         <Image src='/img/imgCadastroResponsivo.svg' width={700} height={307} alt='Imagem de fundo'/>
                         <Image src='/img/logoCadastro.svg' alt="Imagem" width={200} height={200} className={styles.imgLogo} />
                         </div>
                )}
                <div className={styles.form}>
                    <form>
                    <h3>CRIE <span>UMA CONTA</span></h3>
                        <label className={styles.label}>Nome</label>
                        <input className={styles.input} type="text" placeholder=" Seu nome completo..."></input>
                        <label className={styles.label}>E-mail</label>
                        <input className={styles.input} type="email" placeholder=" Seunome@email.com"></input>
                        <div className={styles.doubleInput}>
                            <div className={styles.Idade}>
                                <label className={styles.labelIdade}>Idade</label>
                                <input className={styles.inputIdade} type="number" placeholder=" Sua idade"></input>
                            </div>
                            <div className={styles.Senha}>
                                <label className={styles.labelSenha}>Senha</label>
                                <input className={styles.inputSenha} type="password" placeholder=" Mínimo de 8 caracteres"></input>

                            </div>
                        </div>
                        <div className={styles.privacyPolicy}>
                            <input type="checkbox" name="option" id="option" value="value"></input><label htmlFor="option" className={styles.politicaPrivacidade}>Concordo com todas as políticas de privacidade.</label>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.singUpWrapper}>
                    <button type='submit' className={styles.submitButton}> CRIAR CONTA </button>
                    <div className={styles.singUpBox}>
                        <p className={styles.singUp}> Já tem uma conta? <Link href="/login">Faça login</Link></p>
                    </div>

                </div>
        </div>
    <Footer/>
    </>
    )
}

