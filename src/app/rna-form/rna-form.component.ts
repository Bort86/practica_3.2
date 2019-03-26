import { Component, OnInit } from '@angular/core';

//model
import {RnaForm} from '../model/rna-form';
import {Patient} from '../model/patient';
import {PatientRol} from '../model/patient-rol';

@Component({
  selector: 'app-rna-form',
  templateUrl: './rna-form.component.html',
  styleUrls: ['./rna-form.component.css']
})
export class RnaFormComponent implements OnInit {

  //properties
  rna : RnaForm;
  patients : Patient[]=[];

  constructor() { }

  ngOnInit() {
    this.rna = new RnaForm();
    //we format the entry date first
    let date = new Date();
    this.rna.setEntryDate(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());

    //then we fill the patients array for the select with new patients
    this.patients.push(new Patient ('Marc', 'Codina', 26, 'Calle Aquí, 3, BCN', new PatientRol(1,'sick')));
    this.patients.push(new Patient ('Pablo', 'Rodriguez', 33, 'Calle Allí, 5, Guinardó', new PatientRol(2,'healthy')));
    this.patients.push(new Patient ('Marc', 'Rodriguez', 30, 'Calle Pacá, 9, Madrid', new PatientRol(3,'urgent')));
  }

  rnaIntro() : void{
    console.log(this.rna)
  }

}
