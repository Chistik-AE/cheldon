import React, { useState } from 'react'
import './logIn.css'


export default function LogIn() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [user, setUser] = useState({
        role: '',
        isAuth: false
    })

    const userInfo = {
        login: userName,
        pass: userPassword,
        role: user.role,
        auth: user.isAuth
    }

    function checkUser(prev, props) {
        let newState = { ...prev, role: '', isAuth: false };
        if (userName === 'andrey@vtb.ru' && userPassword === 'adminPassword') {
            newState = { ...prev, role: 'admin', isAuth: true };
        }
        else
            if (userName === 'sasha@vtb.ru' && userPassword === 'userPassword') {
                newState = { ...prev, role: 'default user', isAuth: true };
            }
        return newState
    }

    const SuccessBlock = () => {
        let descr = JSON.stringify(userInfo, null, 2)
        return (<div style={{ marginTop: '200px' }} > log is success <br/> {descr}</div>)
    }




    return (<div>
        {!user.isAuth ?
            <div className='logIn'>
                Авторизация
                <input type='email' placeholder='User Name' id='email' value={userName} onChange={(event) => setUserName(event.target.value)} required />
                <input type='password' placeholder='Password' id='password' value={userPassword} onChange={(event) => setUserPassword(event.target.value)} required />
                <button className='inputButtom'
                    onClick={() => {
                        setUser(checkUser)
                    }} >
                    войти
                </button>
            </div>
            : <SuccessBlock />
        }
    </div>
    )

}

