import React, { useState } from 'react'
import './mySpace.css'
import data from './dataBase.json'
import { keyboard } from '@testing-library/user-event/dist/keyboard';



export default function MySpace() {


    let tableHead = Object.keys(data[0]);
    let tableBody = Object.values(data);
    /* console.log(Object.keys(data[0]).length); */



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
                <div class="myTable">
                    <table class="product">
                        <thead>
                            {tableHead.map((headerName) => { return <th className='myTable'>{headerName}</th> })}
                        </thead>
                        <tbody>

                            {tableBody((tableRow) => {
                                return
                                for (let row = 0; row < data.length; row++) {
                                    <tr>
                                        for (let cell = 0; cell < Object.keys(data[row]).length; cell++) {
                                            <th>{Object.keys(data[row.cell])}</th>
                                        }
                                    </tr>
                                }
                            })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    )





}

