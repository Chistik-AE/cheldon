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
    let tableFilterResult = data;



    /* console.log(_.orderBy(data, ['max_finish_dttm'], ['desc'])); */


    function sortMaxFinish(t) {
        tableFilterResult = _.orderBy(data, ['max_finish_dttm'], [t.target.value])
        setDataBase(tableFilterResult)
    }



    function filterTypeFlow(h) {         //функция фильтра по type_flow
        if (h.target.value === 'default') {
            setDataBase(data)
        } else {
            tableFilterResult = _.filter(data, function (qwe) {     //Фильтр!!!!
                return qwe.type_flow === h.target.value;
            })
        }
        setDataBase(tableFilterResult)
    }

    function logOut() {  //выход со страницы и разлогинивание
        localStorage.clear();
        navigate("/logIn");
    }

    function tableSearch() {  //функция поиска
        if (search === '') {
            setDataBase(data)
        } else {
            setDataBase('')
            for (let i = 0; i < Object.keys(data).length; i++) {
                for (let j = 0; j < Object.values(data[0]).length; j++) {
                    if (search.toUpperCase() === Object(Object.values(data[i])[j]).toString().toUpperCase()) {
                        tableSearchResult = tableSearchResult.concat([(Object.values(data[i]))])
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
                <div className='options'>
                    <div >
                        <input className='searchForm' type='text' placeholder='Введите запрос' value={search} onChange={(event) => setSearch(event.target.value)} required id="search-text" />
                        <button onClick={() => tableSearch()}>Применить</button>
                    </div>
                    <div>
                        <select onChange={sortMaxFinish}>
                            <option value="desc">По убыванию</option>
                            <option value="asc">По возростанию</option>
                        </select>
                    </div>
                    <div>
                        <select onChange={filterTypeFlow}>
                            <option value="default">По умолчанию</option>
                            <option value="RDV">RDV</option>
                            <option value="IDL">IDL</option>
                        </select>
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



