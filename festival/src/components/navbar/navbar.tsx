import styles from './navbar.module.css';
import Link from 'next/link';


function Navbar(){
    return (
      <header className={styles.header}>
        <div>
          <h1>東京都</h1>
        </div>
        <nav className={styles.Navbar}>
          <ul>
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
              <Link href="/about">
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
        </header>
      );
}
export default Navbar;