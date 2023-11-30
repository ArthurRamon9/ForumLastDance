import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Areacadastro, Cadastro1, Form } from './Style'

function Cadastro() {
    const [name, setName]         = useState("");
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            password
        }
        
        try {
            const response = await axios.post("http://localhost:3008/api/user/create", data)
            
            if (response.data.success) {                
                navigate('/login');
                alert(response.data.message);
                // console.log('Sucesso no registro:', response.data.message);
            } else {
                alert(response.data.message)
                console.error('Erro no registro:', response.data.message);
            }
        } catch (error) {
            alert('Deu erro');
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
                        value={name}
                        onChange={(e) => setName(e.target.value )}
                    />

                    <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value )}
                        autoFocus 
                        />


                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value )}
                    />
            
                    <button                         
                        onClick={register}
                    > 
                        Cadastrar
                    </button>                   

                </Form>
            </Cadastro1>
        </Areacadastro>
    )
}

export default Cadastro;
