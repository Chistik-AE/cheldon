import React, { useState } from 'react'
import './mySpace.css'
import data from './dataBase.json'



export default function MySpace() {




    const newData = data.map(Object.values);



    /* let res = newData.map(function (item) {
        return 
        
        <tr key={item.id}>
            <td className='call'>{item.rdv_src_cd}</td>
            <td className='call'>{item.bdm_name}</td>
            <td className='call'>{item.run_params}</td>
            <td className='call'>{item.max_finish_dttm}</td>
            <td className='call'>{item.count_records}</td>
            <td className='call'>{item.run_last_state}</td>
            <td className='call'>{item.type_flow}</td>
        </tr>;
    });

    return <table>
        <thead>
            <tr>
                <td>Название</td>
                <td>Стоимость</td>
                <td>Стоимость</td>
                <td>Стоимость</td>
                <td>Стоимость</td>
                <td>Стоимость</td>
                <td>Стоимость</td>
            </tr>
        </thead>
        <tbody>
            {res}
        </tbody>
    </table>; */


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
                    {/*  <table className='myTable'>
                        <thead className='call'>
                            <td className='call'>rdv_src_cd</td>
                            <td className='call'>bdm_name</td>
                            <td className='call'>run_params</td>
                            <td className='call'>max_finish_dttm</td>
                            <td className='call'>count_records</td>
                            <td className='call'>run_last_state</td>
                            <td className='call'>type_flow</td>
                        </thead>
                        <tbody>
                            <% for (let index = 0; index < newData.length; index++) {
                                const element = array[index];
                                
                            }  {
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            }; %>}

                        </tbody>
                    </table> */}
                </div>

            </div>
        </div >
    )





}

