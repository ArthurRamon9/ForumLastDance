import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Arealogin, Login1, Form } from './StyleLog';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Enviar dados de login para o servidor
            const response = await axios.post('http://localhost:3008/api/auth/login', {
                email: email,
                password: password
            });

            // Se o login for bem-sucedido, você pode fazer algo com os dados do usuário e o token
            const userData = response.data.data;
            const token = userData.token;

            if (response.data.success) {
                alert('Sucesso! Maravilha!')
            } else {
                alert('Erro ao entrar!')
            }


            localStorage.setItem('token', token);

            console.log('Usuário conectado:', userData);

            // Aqui você pode redirecionar para a página desejada após o login
            //window.location.href = '/forum';
            navigate('/forum')
        } catch (error) {

            alert('Erro')
        }
    };

    return (        
        <Arealogin>
            <Login1>
            <Form>
            <div className="title">
                        <h1>LOGIN</h1>
                    </div>

                <input 
                    placeholder="Email" 
                    type="text" 
                    value={email} 
                    onChange={(e) => 
                    setEmail(e.target.value)} 
                />

                <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button onClick={handleLogin}>Login</button>
            </Form>
            </Login1>
        </Arealogin>

    );
};

export default Login;
