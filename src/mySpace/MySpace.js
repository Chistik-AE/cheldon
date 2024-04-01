import React, { useState } from 'react'
import './mySpace.css'
import data from './dataBase.json'
import { useNavigate } from 'react-router-dom';


export default function MySpace() {
    const _ = require('lodash');
    let tableSearchResult = [];
    let tableSort = _.orderBy(data, ['max_finish_dttm'], ['desc'])
    const [dataBase, setDataBase] = useState(tableSort);
    let navigate = useNavigate();
    let tableHead = Object.keys(data[0]);
    let tableRows = Object.values(dataBase);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('default');
    let tableFilterResult = tableSort;
    const [checked, setChecked] = useState(false);




    function logOut() {  //выход со страницы и разлогинивание
        localStorage.clear();
        navigate("/logIn");
    }



    function sortMaxFinish(t) {   //функция сортировки 
        tableSort = _.orderBy(data, ['max_finish_dttm'], [t.target.value])
        setDataBase(tableSort)
        tableFilterResult = tableSort
        searchAnd()
    }

    function searchAnd() {   //функция фильтра и поиска
        if (filter === 'default') {       //фильтр
            tableFilterResult = tableSort
        } else {
            tableFilterResult = _.filter(tableSort, function (qwe) {
                return qwe.type_flow === filter;
            })
        }
        setDataBase()
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
        /* console.log(dataBase[1]) */
    }


    function onChange(indexRow, newRow, cell) {    //функция на checkbox 
        setChecked(!cell.target.value)
        console.log(indexRow)
        console.log(Object.values(dataBase[indexRow]))  //вся строка
        newRow.isChecked = !newRow.isChecked   //изменение ячейки, теперь изменить ячейки в остальных столбцах, и перерисовать таблицу
        console.log(Object.values(dataBase[indexRow]))

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
                        <input className='searchForm' type='text' placeholder='Введите запрос' value={search} onChange={(event) => setSearch(event.target.value)} />
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
                        <thead disabled>
                            {tableHead.map((newHead, index) => { return <th key={index}>{newHead}</th> })}
                        </thead>
                        <tbody>
                            {tableRows.map((newRow, indexRow) => {
                                return <tr key={indexRow}> {Object.values(newRow).map((cell, index) => {
                                    if (index === 7) {
                                        return <td key={index}> <input checked={cell} type='checkbox' onChange={(cell) => onChange(indexRow, newRow, cell)} ></input> </td>
                                    } else {
                                        return <td key={index}>{cell}</td>
                                    }
                                }
                                )} </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button disabled={!checked}>
                        Редкатировать
                    </button>
                </div>
            </div>
        </div >
    )
}

