import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import { Ingresso, IngressosProps } from '@/interfaces/interfaces'
import axios from 'axios'
import TipoIngresso from '@/components/tipoIngresso/tipoIngresso'
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

// const repeatText = (text:string) => {
//   let screenWidth = screen.width;
//   let textWidth = text.length*8;
//   let repetitions = Math.ceil(screenWidth/textWidth);

//   let repeatText = Array(repetitions).fill(text);
  
//   return repeatText;

// }
const repeatText = (text: string) => {
  let screenWidth;
  if (typeof window !== "undefined") {
    screenWidth = screen.width;
  }
  let textWidth = text.length * 8;
  let repetitions = 10;

  let repeatedText = Array(repetitions).fill(text);

  return repeatedText;
};



  return (
    <>
      <Navbar />
      <Head>
        <title>Tokyo Festival</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Primeira seção */}
      <div className='background-container'>
            
        <section className='main-container'>
          <div className={styles.imgContainer}>
            <Image src="/img/japoneseTextBackground.svg" alt="Imagem de fundo de um texto em japonês" width={1000} height={300}/>
              <h3>Meltdown Fusion</h3>
              <h1>TOKYO</h1>
              <div className={styles.bShadow}>
            </div>  
          </div>
          <div className={styles.bottomContent}>
            <h3>23/08/23 - 25/08/23</h3>
            <div className={styles.buyButton}>
            <Link href='/' legacyBehavior>
              <a>Compre o ingresso</a>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Seção Sobre Nós */}
      <div className='background-container'>
      <div className={styles.sobreNosTitle}>
         {
            repeatText('SOBRE NÓS ').map((text, index) => {
              if(index==1){
                return <span className={styles.span}>{text}</span>
              }
              else if(index ==0){
                let parts = text.split("R");
                return <h1>{parts[1]}</h1>
              }
              else{
                return <h1>{text}</h1>
              }
            })
          }
          </div>
        <section className='main-container'>
          <div className={styles.sobreNosContainerBox}>
            <div className={styles.sobreNosText}>
              <h2>Meltdow Fusion Tokyo</h2>
              <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              <Image src='/img/sobreNosJaponeseImage.svg' alt='Imagem de texto em japonês' width={330} height={330}/>
            </div>
            <div className={styles.sobreNosImageContainer}><Image src='/img/sobreNosImage.svg' alt='Imagem de um show ao vivo' width={400} height={400}/>
            <Image className={styles.layer} src='/img/Layer.svg' alt='Imagem de um show ao vivo' width={400} height={60}/>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>

  )
}
