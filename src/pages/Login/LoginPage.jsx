import { Link, useNavigate } from "react-router-dom";
import styles from './LoginPage.module.css'
import { homeUrl, registerUrl } from "../../constants/urls";
import { logInWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth-service";
import { useState } from "react";

export function LoginPage(){
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    
    // const handleSignInWithGoogle = async() => {
    //     await signInWithGoogle();
    //     navigate(homeUrl);
    // }

    const handleOnChange = async (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value,
        })
    } 

    const onSubmit = async(event) =>{
        event.preventDefault();
        console.log({formData})
        const {email, password} = formData
        await logInWithEmailAndPassword(email, password);
        navigate(homeUrl);
    }

    return (
    <div className={styles.container}>
        <form className={styles.form}>
            <h1 className={styles.title}>Inicia Sesión</h1>            
            <div className={styles.inputContainer}>
                <label htmlFor="nombre">
                    <span>Correo</span>
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ejemplo@gmail.com"
                    onChange={handleOnChange}
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
                    onChange={handleOnChange}
                />              
            </div>

            <button className={styles.submit}
                type="submit"
                onClick={onSubmit}
            >
                Inicia Sesión
            </button>

            {/* <button className={styles.googleButton}
                type="button"
                onClick={handleSignInWithGoogle}
            >
                Inicia sesión con Google
            </button> */}
            
            <Link to={registerUrl} className={styles.link}>¿No tienes cuenta? Regístrate aquí</Link>
            <Link to={homeUrl} className={styles.link}>Regresar a la página principal</Link>


        </form>
    </div>
    )
}