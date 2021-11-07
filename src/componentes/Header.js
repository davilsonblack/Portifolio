import React from 'react'
import Logo from '../img/ds-logo.png'
import EmConstrucao from './EmConstrucao'

export default function Header(){
    return(
        <header>
            <section className='container-header'>
                <div className='logotipo'>
                    <img src={Logo} alt='logo' className='logotipo-logo'/>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href='#'>Início</a>
                        </li>
                        <li>
                            <a href='#'>Projetos</a>
                        </li>
                        <li>
                            <a href='#'>Sobre</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/davilsonblack/'>Blog</a>
                        </li>
                        <li>
                            <a href='#'>Suporte</a>
                        </li>
                    </ul>
                </nav>

                <a className='header-botao' href='#'>Entre em contato</a>

            </section>
        </header>
    )
}