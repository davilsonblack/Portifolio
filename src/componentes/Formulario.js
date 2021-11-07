import React from "react";

export default function Formulario(){
    return(
        <div className='container-formulario'>
            <h1 className='title'>Contact</h1>
            <section class="box">
                <form action=""> 
                    <fieldset>
                        <legend> 
                            Formulario de Clientes
                        </legend>
                        <br/><br/>
                        <div class="box-input">
                            <input type="text" name="name" id="name" class="box-input-user" required/> 
                            <label for="name" class="box-input-label">Nome Completo</label>
                        </div>
                        <br/><br/>
                        <div class="box-input">
                            <input type="mail" name="email" id="email" class="box-input-user" required/>
                            <label for="email" class="box-input-label">E-mail</label>
                        </div>
                        <br/><br/>
                        <div class="box-input">
                            <input type="tel" name="phone" id="phone" class="box-input-user" required/>
                            <label for="phone" class="box-input-label" >Telefone</label>
                        </div>
                        <br/>
                        <p style={{color: '#fff', marginBottom: '10px'}}>Sexo: </p>
                        <div class="box-genero">
                            <input type="radio" id="feminino" nome="genero" value="feminino" required/>
                            <label style={{color: '#fff', marginLeft: '10px'}} className='box-genero-sexo' for="feminino">Feminino</label>
                        </div>
                        <div class="box-genero">
                            <input type="radio" id="masculino" nome="genero" value="masculino"/>
                            <label style={{color: '#fff', marginLeft: '10px'}} className='box-genero-sexo' for="masculino">Masculino</label>
                        </div>
                        <div class="box-genero">
                            <input className='box-genero-sexo' type="radio" id="outro" nome="genero" value="outro" />
                            <label style={{color: '#fff', marginLeft: '10px'}} for="outro">Outro</label>
                        </div>
                        <br/><br/>
                        <div class="box-date box-input">
                            <label for="date" style={{color: '#fff'}}>Data de Nascimento:</label>
                            <input type="date" name="date" id="date" class="box-date-input" required/>
                        </div>
                        <br/><br/>
                        <div class="box-input">
                            <input type="text" name="city" id="city" class="box-input-user" required/>
                            <label for="city" class="box-input-label">Cidade</label>
                        </div>
                        <br/><br/>
                        <div class="box-input">
                            <input type="text" name="stade" id="stade" class="box-input-user" required/>
                            <label for="stade" class="box-input-label">Estado</label>
                        </div>
                        <br/><br/>
                        <div class="box-input">
                            <input type="text" name="address" id="address" class="box-input-user" required/>
                            <label for="address" class="box-input-label">Endereço</label>
                        </div>
                        <br/><br/>
                        <input type="submit" name="submit" id="submit"/>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}