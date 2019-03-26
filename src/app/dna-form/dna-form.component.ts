import { Component, OnInit } from '@angular/core';

//model
import {DnaForm} from '../model/dna-form';
import {Patient} from '../model/patient';
import {PatientRol} from '../model/patient-rol';

@Component({
  selector: 'app-dna-form',
  templateUrl: './dna-form.component.html',
  styleUrls: ['./dna-form.component.css']
})
export class DnaFormComponent implements OnInit {

  //properties
  dna : DnaForm;
  patients : Patient[]=[];

  constructor() { }

  ngOnInit() {

    this.dna = new DnaForm();
    //we format the entry date first
    let date = new Date();
    this.dna.setEntryDate(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());

    //then we fill the patients array for the select with new patients
    this.patients.push(new Patient ('Marc', 'Codina', 26, 'Calle Aquí, 3, BCN', new PatientRol(1,'sick')));
    this.patients.push(new Patient ('Pablo', 'Rodriguez', 33, 'Calle Allí, 5, Guinardó', new PatientRol(2,'healthy')));
    this.patients.push(new Patient ('Marc', 'Rodriguez', 30, 'Calle Pacá, 9, Madrid', new PatientRol(3,'urgent')));
  }

  dnaIntro() : void{
    console.log(this.dna)
  }

}
