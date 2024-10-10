import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./chinchin-logo.png";
import { homeUrl, loginUrl, registerUrl } from "../../constants/urls";

export function Navbar(){
    return(
        <nav className={styles.navbar}>            
                <Link to={homeUrl}>
                <img src={logo} className={styles.logo}></img>
                </Link>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                    <Link to={registerUrl} className={styles.menuItem}>Registro</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link to={loginUrl} className={styles.menuItem}>Ingresar</Link>
                </li>
            </ul>
        </nav>
    )
}