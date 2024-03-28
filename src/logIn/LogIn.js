import React, { useEffect, useState } from 'react'
import './logIn.css'
import { useNavigate, useLocation } from 'react-router-dom';


export default function LogIn() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    let location = useLocation()
    let navigate = useNavigate();



    function go(role, isAuth, userName) {
        localStorage.setItem('role', role);
        localStorage.setItem('isAuth', isAuth);
        localStorage.setItem('User', userName);
        navigate("/main");
    }

    useEffect(() => {
        if (localStorage.getItem('isAuth')) navigate('/main')
    }, [])


    function checkUser() {
        if (userName === 'andrey@vtb.ru' && userPassword === 'adminPassword') {
            go('admin', true, userName)
        }
        else
            if (userName === 'sasha@vtb.ru' && userPassword === 'userPassword') {
                go('default user', true, userName)
            }
    }


    return (<div>
        <div className='logIn'>
            Авторизация
            <input type='email' placeholder='User Name' id='email' value={userName} onChange={(event) => setUserName(event.target.value)} required />
            <input type='text' placeholder='Password' id='password' value={userPassword} onChange={(event) => setUserPassword(event.target.value)} required />
            <button className='inputButtom'
                onClick={() => { checkUser() }} >
                войти
            </button>
        </div>
    </div>
    )



}
