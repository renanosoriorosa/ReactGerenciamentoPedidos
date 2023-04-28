import  {React, useState} from 'react';
import './styles.css';
import api from '../../services/api/api';
import { useNavigate } from 'react-router-dom';
import IsAuthenticated from './../../services/Autenticacao/auth';

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navegate = useNavigate();

    //const history =  useHistory();

    async function login(event){
        event.preventDefault();//evita o refresh da tela

        const data = {
            email,
            password
        }

        try{
            const response = await api.post('v1/Autenticacao/Login', data);
            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.message.accessToken);
            localStorage.setItem('expiration', response.data.message.expiresIn);

             if(IsAuthenticated){
                //navega
                console.log("entrei");
                navegate("/");
            }
        }
        catch(error){
            alert('falha ao logar '+ error);
        }
    }

    return (
        <div className='login-container'>
            <section className='form'>
                <form onSubmit={login}>
                    <h1>Login</h1>
                    <input placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className='button' type='submit'>Login</button>
                </form>
            </section> 
        </div>
    );
}