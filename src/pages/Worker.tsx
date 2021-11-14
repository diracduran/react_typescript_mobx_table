import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/src/stylesheets/datepicker.scss";
import { useHistory } from "react-router-dom";
import { Props } from '../types';

const Worker = (props:Props) => {

    registerLocale('ru', ru)

    const [birthDate, setBirthDate] = useState(new Date());

    const history = useHistory();
    //const location = useLocation();

    return (
        <>
            {props.store!.workersList.map((worker) => {
                // if(window.location.pathname === worker.id) {
                    return (
                        <table key={worker.id} id={worker.id}>
                            <tr>
                                <th>ФИО: </th>
                                <td>{worker.fullName}</td>
                            </tr>
                            <tr>
                                <th>Телефон: </th>
                                <td>{worker.phone}</td>
                            </tr>
                            <tr>
                                <th>Дата рождения: </th>
                                <td>
                                    <DatePicker wrapperClassName="datePicker" dateFormat="dd/MM/yyyy" selected={birthDate} onChange={(date: Date | null) => setBirthDate(date!)} locale='ru' />
                                </td>
                            </tr>
                            <tr>
                                <th>Эл. почта: </th>
                                <td>{worker.email}</td>
                            </tr>
                            <tr>
                                <th>Кол-во отраб. дней: </th>
                                <td>{worker.workedDays}</td>
                            </tr>
                            <tr>
                                <th>Зарплатн. ставка на день: </th>
                                <td>{worker.salaryPerDay}</td>
                            </tr>
                            <tr>
                                <th>Зарплата: </th>
                                <td>{Number(worker.workedDays) * Number(worker.salaryPerDay)}</td>
                            </tr> 
                        </table>

                    )
                // }
            })}
        
            <div>
                <button onClick={() => history.push('/')}>🔙Назад к таблице</button>
            </div>
        </>
    )
}
export default Worker;