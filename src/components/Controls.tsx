import { observer } from "mobx-react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { AddFormData, Props, Workers } from "../types";

const Controls = observer((props:Props) => {

    const [addFormData, setAddFormData] = useState<AddFormData>({
        lastName: "",
        middleName: "",
        firstName: "",
        birthdate: "",
        phone: "",
        email: "",
        workedDays: "",
        salaryPerDay: "",
    });

    //const [workers, setWorkers] = useState(props.store!.workersList);

    const handleAddFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {  // добавление данных в инпуты
        event.preventDefault();

        const fieldName = event.target.getAttribute("name"); //-> в какой инпут вносятся данные
        const fieldValue = event.target.value; //-> какие данные

        let newFormData = { ...addFormData }; // копия существующих данных (addFormData)...
        newFormData[fieldName as keyof AddFormData] = fieldValue; // ...и их обновление

        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event: React.FormEvent<HTMLFormElement>) => { // добавление данных инпутов в таблицу
        event.preventDefault();
    
        const newWorker: Workers = {
          id: nanoid(),
          lastName: addFormData.lastName,
          middleName: addFormData.middleName,
          firstName: addFormData.firstName,
          birthdate: addFormData.birthdate,
          phone: addFormData.phone,
          email: addFormData.email,
          workedDays: addFormData.workedDays,
          salaryPerDay: addFormData.salaryPerDay,
        };

        
        //const newWorkers = [...workers, newWorker]; // новый массив работников с новым работником
        props.store!.addWorker(newWorker);
        //setWorkers(newWorkers);
        setAddFormData(addFormData);
    };
    

    return (
      <div className="controls">
            <form onSubmit={handleAddFormSubmit}>
                <input
                type="text"
                name="lastName"
                placeholder="Фамилия"
                required
                pattern="^[А-Яа-яЁё]+$"
                onChange={handleAddFormChange}
                />
                <input
                type="text"
                name="middleName"
                placeholder="Имя"
                required
                pattern="^[А-Яа-яЁё]+$"
                onChange={handleAddFormChange}
                />
                <input
                type="text"
                name="firstName"
                placeholder="Отчество"
                required
                pattern="^[А-Яа-яЁё]+$"
                onChange={handleAddFormChange}
                />
                <input
                type="date"
                name="birthdate"
                placeholder="Дата рождения"
                required
                pattern="yyy/MM/dd"
                onChange={handleAddFormChange}
                />
                <input
                type="email"
                name="email"
                placeholder="Эл. почта"
                required
                onChange={handleAddFormChange}
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                />
                <input
                type="tel"
                name="phone"
                placeholder="+7(___)___-__-__"
                pattern="[\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2}" 
                required
                onChange={handleAddFormChange}
                />
                <input
                type="number" 
                min="0" 
                step="1"
                name="workedDays"
                placeholder="Кол-во отраб. дней"
                onChange={handleAddFormChange}
                />
                <input
                type="number" 
                min="0" 
                step="1"
                name="salaryPerDay"
                placeholder="Зарплатн. ставка на день"
                onChange={handleAddFormChange}
                />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
});

export default Controls;