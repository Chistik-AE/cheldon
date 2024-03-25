import React, { useState } from 'react'
import '../App.css'


export default function InputBlock() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userRole, setUserRole] = useState('');
    const [userAuth, setUserAuth] = useState(false);

    const userInfo = {
        login: userName,
        pass: userPassword,
        role: userRole,
        auth: userAuth
    }

    async function checkUser() {
        if (userName === 'andrey@vtb.ru' && userPassword === 'adminPassword') {
            setUserRole('admin');
            setUserAuth(true)
        } else {
            if (userName === 'sasha@vtb.ru' && userPassword === 'userPassword') {
                setUserAuth(true);
                setUserRole('default user')
            }
        }
    }

    function showUserInfo() {
        console.log(JSON.stringify(userInfo, null, 2))
    }


    return (
        <div className='inputBlock'>
            Авторизация
            <input type='email' placeholder='User Name' id='email' value={userName} onChange={(event) => setUserName(event.target.value)} required />
            <input type='password' placeholder='Password' id='password' value={userPassword} onChange={(event) => setUserPassword(event.target.value)} required />
            <button className='inputButtom' onClick={() => checkUser()} >
                проверить
            </button>
            <button disabled={!userAuth} className='inputButtom' onClick={() => showUserInfo()} >
                войти
            </button>
        </div>
    )



}

