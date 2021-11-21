import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/src/stylesheets/datepicker.scss";
import { useHistory, useParams } from "react-router-dom";
import { Props, Workers } from '../types';

const Worker = (props:Props) => {

    registerLocale('ru', ru)

    const params = useParams<Workers>();
    const current = params.id;
    const workerToShow = props.store!.workersList.find((worker) => worker.id === current);

    const [birthDate, setBirthDate] = useState(new Date());

    const history = useHistory();
    //const location = useLocation();

    return (
        <>
            {/* {props.store!.workersList.map((worker) => {
                if(window.location.pathname === worker.id) {
                    return ( */}
                        <table>
                            <tr>
                                <th>Фамилия: </th>
                                <td>{workerToShow!.lastName}</td>
                            </tr>
                            <tr>
                                <th>Имя: </th>
                                <td>{workerToShow!.middleName}</td>
                            </tr>
                            <tr>
                                <th>Отчество: </th>
                                <td>{workerToShow!.lastName}</td>
                            </tr>
                            <tr>
                                <th>Телефон: </th>
                                <td>{workerToShow!.phone}</td>
                            </tr>
                            <tr>
                                <th>Дата рождения: </th>
                                <td>
                                    <DatePicker wrapperClassName="datePicker" dateFormat="yyyy/MM/dd" selected={birthDate} onChange={(date: Date | null) => setBirthDate(date!)} locale='ru' />
                                </td>
                            </tr>
                            <tr>
                                <th>Эл. почта: </th>
                                <td>{workerToShow!.email}</td>
                            </tr>
                            <tr>
                                <th>Кол-во отраб. дней: </th>
                                <td>{workerToShow!.workedDays}</td>
                            </tr>
                            <tr>
                                <th>Зарплатн. ставка на день: </th>
                                <td>{workerToShow!.salaryPerDay}</td>
                            </tr>
                            <tr>
                                <th>Зарплата: </th>
                                <td>{Number(workerToShow!.workedDays) * Number(workerToShow!.salaryPerDay)}</td>
                            </tr> 
                        </table>

                    {/* )
                }
            })} */}
        
            <div>
                <button onClick={() => history.push('/')}>🔙Назад к таблице</button>
            </div>
        </>
    )
}
export default Worker;