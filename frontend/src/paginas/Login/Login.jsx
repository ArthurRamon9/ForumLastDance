import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Arealogin, Login1, Form } from './StyleLog'

function Cadastro() {


    return (

        <Arealogin>
            <Login1>
                <Form>
                    <div className="title">
                        <h1>LOGIN</h1>
                    </div>
                    <label>Nome Usuario</label>
                    <input
                    type="text"
                    name="nomeCompleto"
                    placeholder=" Confirmação da Senha"

                    />
                    <input type="text" name="email" placeholder="Email" autoFocus />
                    <input type="password" name="senha" placeholder=" Senha" />
                    <input
                        type="password"
                        name="confirmesenha"
                        placeholder=" Confirmação da Senha"
                    />
                    <button type="submit" value="Finalizar" id="botao"> Cadastrar </button>
                </Form>
            </Login1>
        </Arealogin>
    )
}

export default Cadastro;
