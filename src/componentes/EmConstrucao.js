import React from 'react'
import Engrenagem from '../img/switch8.png'

export default function EmConstrucao(){
    return (
        <section className='engrenagem-container'>
            <img src={Engrenagem} className='engrenagem-imagem' alt='engrenagem'/>
            <div className='engrenagem-texto'>
            <span>Portifólio em desenvolvimento...</span>
            <h6>V01.20</h6>
            <span>Última atualização: 02-10-2021 ás 22:36.</span>
            </div>
        </section>
    )
}