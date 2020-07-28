import { Injectable } from '@angular/core';

//Import the data model that defines the structure of our objects
import { Exams } from './exams.model';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

   //The data of my Free Exams Folders
   private _Exams: Exams[] = [
    new Exams('exam1', 'SSC', 'CGL'),
    new Exams('English', 'SSC', 'CHSL'),
    new Exams('exam3', 'BANK', 'IBPS'),
    new Exams('exam4', 'BANK', 'SBI'),
    new Exams('Demo Exam', 'demoexam', 'subexam')
  ];

  //getter function to get the data of my Free Exams Folders
  get exams() {
    console.log ("service called");
    console.log (this._Exams);
    return [...this._Exams];  // Using spread operator (i.e. ...) allows me to clone the entire object and get a new array copy
  }

   //Function to provide the dynamic id of the exam (shown as ion-item in html) that has been clicked on the previous page
   accessExamId (id: string) {
    return {...this._Exams.find(s => s.id === id)}; // Using spread operator (i.e. ...) allows me to clone the entire object and get a new array copy
  }

  constructor() { }
}
