import React from "react";
import preloader from './../../../assets/images/preloader.gif'
import styles from './../preloader/preloader.module.css';

let Preloader = () => {
    return <img src={preloader} alt="Spinner" className={styles.gif}/>
}

export default Preloader;