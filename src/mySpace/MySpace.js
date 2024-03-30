import React, { useState } from 'react'
import './mySpace.css'
import data from './dataBase.json'
import { useNavigate } from 'react-router-dom';


export default function MySpace() {
    const _ = require('lodash');
    let tableSearchResult = [];
    const [dataBase, setDataBase] = useState(data);
    let navigate = useNavigate();
    let tableHead = Object.keys(data[0]);
    let tableRows = Object.values(dataBase);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState();
    let tableFilterResult = data;

    function logOut() {  //выход со страницы и разлогинивание
        localStorage.clear();
        navigate("/logIn");
    }

    function sortMaxFinish(t) {   //функция сортировки
        tableFilterResult = _.orderBy(data, ['max_finish_dttm'], [t.target.value])
        setDataBase(tableFilterResult)
    }

    function searchAnd() {   //функция фильтра и поиска
        if (filter === 'default') {       //фильтр
            tableFilterResult = data
        } else {
            tableFilterResult = _.filter(data, function (qwe) {
                return qwe.type_flow === filter;
            })
        }
        setDataBase(tableFilterResult)
        if (search === '') {      //поиск
            tableSearchResult = tableFilterResult
        } else {
            for (let i = 0; i < Object.keys(tableFilterResult).length; i++) {
                for (let j = 0; j < Object.values(tableFilterResult[0]).length; j++) {
                    if (search.toUpperCase() === Object(Object.values(tableFilterResult[i])[j]).toString().toUpperCase()) {
                        tableSearchResult = tableSearchResult.concat([(Object.values(tableFilterResult[i]))])
                    }
                }
            }
        }
        setDataBase(tableSearchResult)
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
                <div className='options'>
                    <div >
                        <input className='searchForm' type='text' placeholder='Введите запрос' value={search} onChange={(event) => setSearch(event.target.value)} required id="search-text" />
                        <button onClick={() => searchAnd()}>Применить</button>
                    </div>
                    <div>
                        <select name="select" defaultValue="desc" onChange={sortMaxFinish}>
                            <option value="desc">По убыванию</option>
                            <option value="asc">По возростанию</option>
                        </select>
                    </div>
                    <div>
                        <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                            <option value="default">По умолчанию</option>
                            <option value="RDV">RDV</option>
                            <option value="IDL">IDL</option>
                        </select>
                        <button onClick={() => searchAnd()}>Применить</button>
                    </div>
                </div>
                <div>
                    <table id="table">
                        <thead>
                            {tableHead.map((newHead, index) => { return <th key={index}>{newHead}</th> })}
                        </thead>
                        <tbody>
                            {tableRows.map((newRow, index) => { return <tr key={index}> {Object.values(newRow).map((cell, index) => { return <td key={index}>{cell}</td> })}</tr> })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )


}



