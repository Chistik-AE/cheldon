import React, { useState } from 'react'
import './logIn.css'
import { useNavigate } from 'react-router-dom';


export default function LogIn() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    let navigate = useNavigate();


    function authOK(role, isAuth, userName) {
        localStorage.setItem('role', role);
        localStorage.setItem('isAuth', isAuth);
        localStorage.setItem('User', userName);
        navigate("/main");
    }


    function checkUser() {
        if (userName === 'andrey@vtb.ru' && userPassword === 'adminPassword') {
            authOK('admin', true, userName)
        }
        else
            if (userName === 'sasha@vtb.ru' && userPassword === 'userPassword') {
                authOK('default user', true, userName)
            }
    }


    return (<div>
        {
            <div className='logIn'>
                Авторизация
                <input type='email' placeholder='User Name' id='email' value={userName} onChange={(event) => setUserName(event.target.value)} required />
                <input type='text' placeholder='Password' id='password' value={userPassword} onChange={(event) => setUserPassword(event.target.value)} required />
                <button className='inputButtom'
                    onClick={() => { checkUser() }} >
                    войти
                </button>
            </div>

        }
    </div>
    )

}
