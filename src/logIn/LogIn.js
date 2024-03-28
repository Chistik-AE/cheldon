import React, { useEffect, useState } from 'react'
import './logIn.css'
import { useNavigate } from 'react-router-dom';


export default function LogIn() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    let navigate = useNavigate();


    useEffect(() => {
        if (user.isAuth) {
            localStorage.setItem('role', user.role);
            localStorage.setItem('isAuth', user.isAuth);
            localStorage.setItem('User', userName);
            console.log('useEffect');
            return navigate("/main");
        }
    },)



    const [user, setUser] = useState({
        role: '',
        isAuth: false
    })

    /* function checkLogIn() {
        setUser(checkUser)
    } */

    /* function saveLocalStorage() {
        if (user.isAuth) {
            localStorage.setItem('role', user.role);
            localStorage.setItem('isAuth', user.isAuth);
            localStorage.setItem('User', userName);
        }

    } */



    /* function chekAuth() {
        if (user.isAuth) {
            return navigate("/main");
        }
    } */


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

    /* const SuccessBlock = () => {
        localStorage.setItem('isAuth', user.isAuth);
        localStorage.setItem('role', user.role);

        return navigate("/main");
    } */


    return (<div>
        {
            <div className='logIn'>
                Авторизация
                <input type='email' placeholder='User Name' id='email' value={userName} onChange={(event) => setUserName(event.target.value)} required />
                <input type='text' placeholder='Password' id='password' value={userPassword} onChange={(event) => setUserPassword(event.target.value)} required />
                <button className='inputButtom'
                    onClick={() => {
                        /* saveLocalStorage() */
                        setUser(checkUser)

                        /* chekAuth() */
                    }} >
                    войти
                </button>
            </div>

        }
    </div>
    )



}
