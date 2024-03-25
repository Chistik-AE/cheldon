import React, { useState } from 'react'
import '../App.css'


export default function InputBlock() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    let userRole = '';
    let userAuth = '';
    const userInfo = {
        login: userName,
        pass: userPassword,
        role: userRole,
        auth: userAuth
    }

    function showUserInfo() {
        if (userName === 'andrey@vtb.ru') {
            if (userPassword === 'adminPassword') {
                userAuth = 'true';
                userRole = 'admin'
            } else {
                userRole = 'false';
                userAuth = 'false'
            }
        } else {
            if (userName === 'sasha@vtb.ru') {
                if (userPassword === 'userPassword') {
                    userAuth = 'true';
                    userRole = 'default user'
                } else {
                    userRole = 'false';
                    userAuth = 'false'
                }
            }
        }
        console.log(JSON.stringify(userInfo, null, 2))
    }

    return (
        <div className='inputBlock'>
            Авторизация
            <input type='email' placeholder='User Name' id='email' value={userName} onChange={(event) => setUserName(event.target.value)} required />
            <input type='password' placeholder='Password' id='password' value={userPassword} onChange={(event) => setUserPassword(event.target.value)} required />
            <button className='inputButtom' onClick={() => showUserInfo()} >
                click me
            </button>
        </div>
    )



}

