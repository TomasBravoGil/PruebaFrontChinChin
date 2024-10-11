import { Link, useNavigate } from "react-router-dom";
import styles from './RegisterPage.module.css'
import { homeUrl, loginUrl, registerUrl } from "../../constants/urls";
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth-service";
import { useState } from "react";

export function RegisterPage(){
    const [formData, setFormData] = useState({
        name: '',
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
        const {email, password, ...extraData} = formData
        await registerWithEmailAndPassword(email, password, extraData);
        navigate(homeUrl);
    }

    return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
            <h1 className={styles.title}>Crea tu cuenta</h1>            
            <div className={styles.inputContainer}>
                <label htmlFor="name">
                    <span>Nombre de Usuario</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jane Doe"
                    onChange={handleOnChange}
                />              
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="email">
                    <span>Correo Electrónico</span>
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
            >
                Regístrate
            </button>

            {/* <button className={styles.googleButton}
                type="button"
                onClick={handleSignInWithGoogle}
            >
                Regístrate con Google
            </button> */}

            
            <Link to={loginUrl} className={styles.link}>¿Ya tienes una cuenta? Inicia Sesión aquí</Link>
            <Link to={homeUrl} className={styles.link}>Regresar a la página principal</Link>


        </form>
    </div>
    );
}