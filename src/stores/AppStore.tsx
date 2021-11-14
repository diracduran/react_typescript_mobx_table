import { observable, action, computed } from "mobx";
import { Workers } from "../types";
import data from '../workers.json';


export class Store {
    @observable workersList: Workers[] = data;

    @action addWorker(worker: Workers) {
        this.workersList.push(worker);
    };
    
    @computed get totalSum () {
        return this.workersList.map(worker => Number(worker.workedDays) * Number(worker.salaryPerDay)).reduce((a, b) => a + b, 0);
    }
}


export const appStore = new Store();