import React from 'react'

export default function Carrossel(){
    return (
        <>
        <div className='container-body'>
            <h1 className='title'>Profile</h1>
            <section className='carrossel-container'>
                <input type='radio' name='slider' id='item-1' checked/>
                <input type='radio' name='slider' id='item-2'/>
                <input type='radio' name='slider' id='item-3'/>
                <input type='radio' name='slider' id='item-4'/>
                <input type='radio' name='slider' id='item-5'/>
                
                <div className='cards'>
                    <label className='card' for='item-1' id='song-1'>
                        <div className='card-title'>
                            <img/>
                            <h1>Ideias criativas 1</h1>
                            <p>Tecnologia e inovação juntos geram uma explosão de ideias únicas, criativas e visualmente bonitas.</p>
                        </div>
                    </label>
                    <label className='card' for='item-2' id='song-2'>
                        <div className='card-title'>
                            <img/>
                            <h1>Ideias criativas 2</h1>
                            <p>Tecnologia e inovação juntos geram uma explosão de ideias únicas, criativas e visualmente bonitas.</p>
                        </div> 
                    </label>
                    <label className='card card-3' for='item-3' id='song-3'>
                        <div className='card-title'>
                            <img/>
                            <h1>Ideias criativas 3</h1>
                            <p>Tecnologia e inovação juntos geram uma explosão de ideias únicas, criativas e visualmente bonitas.</p>
                        </div> 
                    </label>
                    <label className='card card-4' for='item-4' id='song-4'>
                        <div className='card-title'>
                            <img/>
                            <h1>Ideias criativas 4</h1>
                            <p>Tecnologia e inovação juntos geram uma explosão de ideias únicas, criativas e visualmente bonitas.</p>
                        </div> 
                    </label>
                    <label className='card card-5' for='item-5' id='song-5'>
                        <div className='card-title'>
                            <img/>
                            <h1>Ideias criativas 5</h1>
                            <p>Tecnologia e inovação juntos geram uma explosão de ideias únicas, criativas e visualmente bonitas.</p>
                        </div> 
                    </label>
                </div>
            </section>
        </div>
        </>
    )
}