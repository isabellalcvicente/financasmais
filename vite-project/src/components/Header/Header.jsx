//OKAY
import React from 'react'
import Styles from "./header.module.css"

const Header = () => {
  return (
    <header className={Styles.header}>
        <nav> 
            <ul className={Styles.lista}>
                <li><a className={Styles.link} href=''>Home</a></li>
                <li><a className={Styles.link} href=''>Quem somos</a></li>
                <li><a className={Styles.link} href=''>Entrar</a></li>
                <button>Criar Contas</button>               
            </ul>
        </nav>
    </header>
  )
}

export default Header
