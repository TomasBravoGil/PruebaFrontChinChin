import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./chinchin-logo.png";
import { homeUrl, loginUrl, profileUrl, registerUrl } from "../../constants/urls";
import { useUser } from "../../contexts/UserContext";
import { logout } from "../../firebase/auth-service";

export function Navbar(){
    const navigate = useNavigate();
    const { user } = useUser();

    const handleLogout= async () => {
        console.log("SALIENDO")
        await  logout(() => navigate(homeUrl));
    };

    //console.log(user);

    return(
        <nav className={styles.navbar}>            
                <Link to={homeUrl}>
                <img src={logo} className={styles.logo}></img>
                </Link>
            <ul className={styles.menuList}>
                {user &&(<>
                    <li className={styles.menuItem}>
                        <Link to= {profileUrl} className={styles.menuItem}>{user.name}</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <button className={styles.logoutButton} onClick={handleLogout}>Cerrar sesión</button>
                    </li>
                </>)}

                {!user &&(<>
                    <li className={styles.menuItem}>
                        <Link to={registerUrl} className={styles.menuItem}>Registro</Link>
                    </li>
                    <li className={styles.menuItem}>
                            <Link to={loginUrl} className={styles.menuItem}>Ingresar</Link>
                    </li>
                </>)}

            </ul>
        </nav>
    )
}