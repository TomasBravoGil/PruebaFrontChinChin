import React, { useState, useEffect } from 'react';
import { apiUrl } from "../../constants/binance-api";
import styles from "./HomePage.module.css"

export function HomePage(){
    const [data, setData] = useState([])
    const [filtro, setFiltro] = useState("Default")

    const interval = setInterval( ()=>{
        fetchInfo();
    }, 30000)   

    const fetchInfo = () =>{
        return fetch(apiUrl)
        .then((res) => res.json())
        .then((d) => setData(d))
    }

    useEffect(() => {
        fetchInfo();
      }, []);


    return(
        <div className={styles.body}>
            <h1 className={styles.title}>Bienvenido a la página de Crypto!</h1>
            <p className={styles.text}>Aquí podrás ver información sobre Cryptomonedas, y podrás filtrar según lo que necesites</p>
            <div className={styles.listaBoton}>
                <button className={styles.botonF} onClick={() => setFiltro("Name")}>Nombre</button>
                <button className={styles.botonF} onClick={() => setFiltro("Price")}>Precio</button>
            </div>
            <table className={styles.tabla}>
                <tr>
                    <th className={styles.headTabla}>Símbolo</th>
                    <th className={styles.headTabla}>Precio (USD)</th>
                </tr>
                {filtro == "Default" ?(
                    <>
                        {data.map((dataObj, index) =>{
                            return(
                            index < 20 &&(
                            <tr className={styles.row}>
                                <td className={styles.tableItem}>{dataObj.symbol}</td>
                                <td className={styles.tableItem}>{dataObj.price}</td>
                            </tr>)
                            )
                        })}
                    </>
                ): filtro == "Name" ?(
                    <>
                        {data.sort((a, b) => a.symbol.localeCompare(b.symbol)).map((dataObj, index) =>{
                            return(
                            index < 20 &&(
                            <tr className={styles.row}>
                                <td className={styles.tableItem}>{dataObj.symbol}</td>
                                <td className={styles.tableItem}>{dataObj.price}</td>
                            </tr>)
                            )
                        })}
                    </>
                ):(
                    <>
                       {data.sort((a, b) => b.price - a.price).map((dataObj, index) =>{
                            return(
                            index < 20 &&(
                            <tr className={styles.row}>
                                <td className={styles.tableItem}>{dataObj.symbol}</td>
                                <td className={styles.tableItem}>{dataObj.price}</td>
                            </tr>)
                            )
                        })} 
                    </>
                )}
            </table>
        </div>        
    )
}