import { observer } from "mobx-react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { AddFormData, Props, Workers } from "../types";

const Controls = observer((props:Props) => {

    const [addFormData, setAddFormData] = useState<AddFormData>({
        fullName: "",
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
          fullName: addFormData.fullName,
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
                name="fullName"
                placeholder="ФИО"
                onChange={handleAddFormChange}
                />
                <input
                type="text"
                name="birthdate"
                placeholder="Дата рождения"
                onChange={handleAddFormChange}
                />
                <input
                type="text"
                name="phone"
                placeholder="Телефон"
                onChange={handleAddFormChange}
                />
                <input
                type="email"
                name="email"
                placeholder="Эл. почта"
                onChange={handleAddFormChange}
                />
                <input
                type="text"
                name="workedDays"
                placeholder="Кол-во отраб. дней"
                onChange={handleAddFormChange}
                />
                <input
                type="text"
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