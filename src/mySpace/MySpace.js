import React, { useState } from 'react'
import './mySpace.css'
import data from './dataBase.json'
import { keyboard } from '@testing-library/user-event/dist/keyboard';



export default function MySpace() {

    let tableHead = Object.keys(data[0]);
    let tableRows = Object.values(data);

    return (
        <div className='mySpace' >
            <div className='buttomOut'>
                <button className='logOut'  >
                    Выйти
                </button>
            </div>
            <div >
                <div >
                    <h1>
                        Таблица на моей странице
                    </h1>
                </div>
                <div>
                    <table class="product">
                        <thead>
                            {tableHead.map((newHead) => { return <th className='cell'>{newHead}</th> })}
                        </thead>
                        <tbody>
                            {tableRows.map((newRow) => { return <tr className='cell'> {Object.values(newRow).map((row) => { return <td className='cell'>{row}</td> })}</tr> })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )


}



