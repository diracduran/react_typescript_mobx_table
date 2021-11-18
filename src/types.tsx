import { Store } from "./stores/AppStore";

export type Workers = {
    id: string;
    lastName: string;
    middleName: string;
    firstName: string;
    birthdate: string;
    email: string; 
    phone: string;
    workedDays: string;
    salaryPerDay: string;
}


export interface Props {
    store?: Store;
}

export interface AddFormData {
    lastName: string;
    middleName: string;
    firstName: string;
    birthdate: string;
    phone: string;
    email: string;
    workedDays: string;
    salaryPerDay: string;
    fieldName?: string;
}