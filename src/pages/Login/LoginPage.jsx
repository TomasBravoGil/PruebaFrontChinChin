import { Link, useNavigate } from "react-router-dom";
import styles from './LoginPage.module.css'
import { homeUrl, registerUrl } from "../../constants/urls";


export function LoginPage(){
    return (
    <div className={styles.container}>
        <form className={styles.form}>
            <h1 className={styles.title}>Inicia Sesión</h1>            
            <div className={styles.inputContainer}>
                <label htmlFor="nombre">
                    <span>Nombre de Usuario o Correo</span>
                </label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Jane Doe, o ejemplo@gmail.com"
                />              
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="password">
                    <span>Contraseña</span>
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                />              
            </div>

            <button className={styles.submit}
                type="submit"
            >
                Inicia Sesión
            </button>
            
            <Link to={registerUrl} className={styles.link}>¿No tienes cuenta? Regístrate aquí</Link>
            <Link to={homeUrl} className={styles.link}>Regresar a la página principal</Link>


        </form>
    </div>
    )
}