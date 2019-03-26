import { Component, OnInit } from '@angular/core';

//model
import {ProteinForm} from '../model/protein-form';
import {Patient} from '../model/patient';
import {PatientRol} from '../model/patient-rol';

@Component({
  selector: 'app-protein-form',
  templateUrl: './protein-form.component.html',
  styleUrls: ['./protein-form.component.css']
})
export class ProteinFormComponent implements OnInit {
  //properties
  protein : ProteinForm;
  patients : Patient[]=[];

  constructor() { }

  ngOnInit() {
    this.protein = new ProteinForm();
    //we format the entry date first
    let date = new Date();
    this.protein.setEntryDate(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());

    //then we fill the patients array for the select with new patients
    this.patients.push(new Patient ('Marc', 'Codina', 26, 'Calle Aquí, 3, BCN', new PatientRol(1,'sick')));
    this.patients.push(new Patient ('Pablo', 'Rodriguez', 33, 'Calle Allí, 5, Guinardó', new PatientRol(2,'healthy')));
    this.patients.push(new Patient ('Marc', 'Rodriguez', 30, 'Calle Pacá, 9, Madrid', new PatientRol(3,'urgent')));
  }

  proteinIntro() : void{
    console.log(this.protein)
  }

}
