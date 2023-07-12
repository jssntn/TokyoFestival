import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import styles from '@/styles/Login.module.css'
import img from '../../public/img/loginImg.svg'
import logo from '../../public/img/logoLogin.svg'
import Image from 'next/image'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })


export default function Login() {


    return(
    <>
        <Navbar/>
        <div className={styles.Wrapper}>
            
            <div className={styles.Container}>
                <div className={styles.imgs}>
                <Image src={img} alt="Imagem" className={styles.Img} />
                <Image src={logo} alt="Imagem" className={styles.imgLogo} />
                </div>
                <div className={styles.form}>
                    <form>
                    <h3>FAÇA <span>LOGIN</span></h3>
                        <label className={styles.label}>E-mail</label>
                        <input className={styles.input} type="email" placeholder=" Seunome@email.com"></input>
                        <div className={styles.doubleInput}>
                            <div className={styles.Senha}>
                                <label className={styles.labelSenha}>Senha</label>
                                <input className={styles.inputSenha} type="password" placeholder=" Mínimo de 8 caracteres"></input>
                            </div>
                        </div>
                        <div className={styles.forgetPassword}>
                            <Link legacyBehavior href='/cadastro'><a>Esqueceu sua senha ?</a></Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.singUpWrapper}>
                    <button type='submit' className={styles.submitButton}> ENTRAR </button>
                    <p className={styles.singUp}>Não tem uma conta? <Link href="/cadastro">Crie uma</Link></p>

                </div>
        </div>
    <Footer/>
    </>
    )
}
