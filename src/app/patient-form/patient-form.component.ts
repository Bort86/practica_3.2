import { Component, OnInit } from '@angular/core';

//Model
import {Patient} from '../model/patient';
import {PatientRol} from '../model/patient-rol';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  //properties
  patient: Patient;
  patientRols : PatientRol[]=[];

  constructor() { }

  ngOnInit() {

    let patientRolAuxs: string [] = ["healthy", "sick", "urgent" ];

    for (let i:number = 0; i < patientRolAuxs.length; i++){
      let patientRolaux = new PatientRol(i, patientRolAuxs[i]);
      this.patientRols.push(patientRolaux);
    }


    this.patient = new Patient();
  }

  patientIntro(): void {
    console.log(this.patient);

  }

}
