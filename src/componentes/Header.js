import React from 'react'

export default function Header(){
    return(
        <header>
            <section className='container-header'>

                <div className='logotipo'>
                    <svg height="80" width='100'>
                        <rect x="15" y="6" rx="20" ry="20"/>
                    </svg>
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