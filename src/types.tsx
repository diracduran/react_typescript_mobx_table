import { Store } from "./stores/AppStore";

export type Workers = {
    id: string;
    fullName: string;
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
    fullName: string;
    birthdate: string;
    phone: string;
    email: string;
    workedDays: string;
    salaryPerDay: string;
    fieldName?: string;
}