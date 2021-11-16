import { inject, observer } from "mobx-react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Props } from "../types";

@inject('appStore')
@observer class Table extends Component<Props> {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Эл. почта</th>
                    <th>Телефон</th>
                    <th>Кол-во отработан. дней</th>
                    <th>Зарплатная ставка на день</th>
                    <th>Зарплата</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.store!.workersList.map(worker => (
                        <tr key={worker.id}>                    
                            <td><Link to={ `/${worker.id}`}>{worker.fullName}</Link></td>
                            <td>{worker.birthdate}</td>
                            <td>{worker.email}</td>
                            <td>{worker.phone}</td>
                            <td>{Number(worker.workedDays)}</td>
                            <td>{Number(worker.salaryPerDay)}</td>
                            <td>{Number(worker.salaryPerDay) * Number(worker.workedDays)}</td>
                        </tr>
                    ))}
                </tbody>
                    <tr>
                        <td colSpan={6} style={{textAlign: 'right'}}>Σ: </td>
                        <td>{this.props.store!.totalSum}</td>
                    </tr>
                <tfoot>
                </tfoot>
            </table>
        );
    }
}


export default Table;