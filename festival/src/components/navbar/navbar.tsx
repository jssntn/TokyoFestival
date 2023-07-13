import styles from './navbar.module.css';
import Link from 'next/link';


function Navbar(){
    return (
        <nav className={styles.Navbar}>
          <ul>
          <li className={styles.logo}>
                東京都
            </li>
          <li>
              <Link href="/">
                Início
              </Link>
            </li>
            <li>
              <Link href="/atracoes">
                 Atrações
              </Link>
            </li>
            <li>
              <Link href="/ingressos">
                Ingressos
              </Link>
            </li>
            <li>
              <Link href="/cadastro">
                Cadastro
              </Link>
            </li>
            <li>
              <Link href="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      );
}
export default Navbar;