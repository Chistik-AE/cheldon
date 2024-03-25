import React, { useState } from 'react'
import '../App.css'


export default function InputBlock() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const userInfo = {
        login: userName,
        pass: userPassword,
        role: 'роль...',
        auth: 'да?'
    }



    function showUserInfo() {
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


    function authWithEmailAndPassword(email, password) {
        const apiKey = 'AIzaSyCTxHgxfwwLIk_c9cYtIltmhG0T8oZU5YU'
        return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                email, password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => data.idToken)
    }
}
