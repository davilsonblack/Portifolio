import React from 'react'
import Img from  '../img/portifolio-inicio-imagem.png'

export default function Inicio(){
    return (
        <section className='inicio row'>
            <div className='inicio-unid inicio-intro col-5'>
                <span>Olá, meu nome é</span>
                <h1>Davi Silva Ferreira</h1>
                <p className='inicio-sub-title'>Front-end developer and future Full-stack</p>
                <p>Eu sou um desenvolvedor front-end, especializado na construção e design de experiências digitais. Atualmente, eu estou em busca de uma oportunidade no mercado de trabalho.</p>
                <section className='botoes mt-4 text-center'>
                    <a href='#' className='inicio-btn btn-portifolio'>Ver portifólio</a>
                    <a href='#' className='inicio-btn btn-cv'>Download CV</a>
                </section>
            </div>
            <div className='inicio-unid col-7'>
                <img src={Img} alt="inicio-imagem" className='inicio-imagem'></img>
            </div>
        </section>
    )
}