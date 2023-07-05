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
              <Link href="/about">
                 Atrações
              </Link>
            </li>
            <li>
              <Link href="/ingressos">
                Ingressos
              </Link>
            </li>
            <li>
              <Link href="/about">
                Cadastro
              </Link>
            </li>
            <li>
              <Link href="/about">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      );
}
export default Navbar;