import { Link, useNavigate } from "react-router-dom";
import styles from './RegisterPage.module.css'
import { homeUrl, loginUrl, registerUrl } from "../../constants/urls";

export function RegisterPage(){
    const navigate = useNavigate();
    return (
    <div className={styles.container}>
        <form className={styles.form}>
            <h1 className={styles.title}>Crea tu cuenta</h1>            
            <div className={styles.inputContainer}>
                <label htmlFor="nombre">
                    <span>Nombre de Usuario</span>
                </label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Jane Doe"
                />              
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="correo">
                    <span>Correo Electrónico</span>
                </label>
                <input
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="ejemplo@gmail.com"
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
                Regístrate
            </button>

            
            <Link to={loginUrl} className={styles.link}>¿Ya tienes una cuenta? Inicia Sesión aquí</Link>
            <Link to={homeUrl} className={styles.link}>Regresar a la página principal</Link>


        </form>
    </div>
    );
}