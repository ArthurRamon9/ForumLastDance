import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Areacadastro, Cadastro1, Form } from './Style'

function Cadastro() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const registrar = async () => {
        try {
            const response = await axios.post("http://localhost:3008/api/user/create", user)

            if (response.data.success) {
                console.log('Sucesso no registro:', response.data.message);
            } else {
                console.error('Erro no registro:', response.data.message);
            }
        } catch (error) {

        }
    }

    return (

        <Areacadastro>
            <Cadastro1>
                <Form>
                    <div className="title">
                        <h1>CADASTRO</h1>
                    </div>

                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />

                    <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        autoFocus />


                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <a href='/Login'><button type="submit" onClick={registrar}> Cadastrar </button></a>
                </Form>
            </Cadastro1>
        </Areacadastro>
    )
}

export default Cadastro;
