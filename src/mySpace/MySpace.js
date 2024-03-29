import React, { useState } from 'react'
import './mySpace.css'
import data from './dataBase.json'
import { useNavigate } from 'react-router-dom';


export default function MySpace() {
    let notSearch = data;
    let tableSearchResult = [];
    const [dataBase, setDataBase] = useState(data);
    let navigate = useNavigate();
    let tableHead = Object.keys(notSearch[0]);
    let tableRows = Object.values(dataBase);
    const [search, setSearch] = useState('');





    function logOut() {
        localStorage.clear();
        navigate("/logIn");
    }




    function tableSearch() {
        if (search === '') {
            setDataBase(notSearch)
        } else {
            setDataBase('')
            for (let i = 0; i < Object.keys(notSearch).length; i++) {
                for (let j = 0; j < Object.values(notSearch[0]).length; j++) {
                    if (search/* .toUpperCase() */ == Object(Object.values(notSearch[i])[j])/* .toUpperCase() */) {
                        tableSearchResult = tableSearchResult.concat([(Object.values(notSearch[i]))])
                    }
                }
            }
            setDataBase(tableSearchResult);
        }

    }



    return (
        <div className='mySpace' >
            <div className='buttomOut'>
                {localStorage.getItem('User')}
                <button className='logOut' onClick={() => { logOut() }} >
                    Выйти
                </button>
            </div>
            <div className='main' >
                <div >
                    <h1>
                        Таблица на моей странице
                    </h1>
                </div>
                <div>
                    <input className='searchForm' type='text' placeholder='Введите запрос' value={search} onChange={(event) => setSearch(event.target.value)} required id="search-text" />
                    <button onClick={() => tableSearch()}>Применить</button>
                </div>
                <div>
                    <table>
                        <thead>
                            {tableHead.map((newHead, index) => { return <th key={index}>{newHead}</th> })}
                        </thead>
                        <tbody id="table">
                            {tableRows.map((newRow, index) => { return <tr key={index}> {Object.values(newRow).map((cell, index) => { return <td key={index}>{cell}</td> })}</tr> })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )


}



